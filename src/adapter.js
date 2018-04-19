console.log("adapter class hooked up")
base_url = 'http://localhost:3000/api/v1/'

class Adapter {

  static getUsers(){

  }

  static getUser(usernameInput){
    fetch(base_url + 'users', {
      headers: {'Content-Type': 'application/json'},
      method: 'get'
    }).then(r=>r.json()).then(json=>{
      let newUserJson = json.find(user=>user.username===usernameInput)
      if (newUserJson===undefined) {
        Adapter.createUser(usernameInput)
      } else {
        console.log('hi')
        new User(newUserJson)
      }
    })
  }

  static leaderboard(){
    fetch(base_url + 'users', {
      headers: {'Content-Type': 'application/json'},
      method: 'get'
    }).then(r=>r.json()).then(json=>{
      // for (let i=0;i<json.length;i++){
      //   json[i].completed_games.forEach(game=>{new Score(json[i].username, game.score)})
      // }
      scoreStore = []
      let leaderboard = new Leaderboard
      json.forEach(user=>user.completed_games.forEach(game=>new Score(user.username, game.score)))
      let ranked = scoreStore.slice().sort((a,b)=>b.score-a.score)
      let gameContent = document.getElementById('game-content')
      let board = document.getElementById('scoreboard')
      board.innerHTML = leaderboard.render()


      // let leaderboard = leaderStore[0]
      //
      // let playerArray = json.sort(function(a,b){return (a.completed_games.sort(function(a,b){return a.score-b.score}).slice(-1)[0])-(b.completed_games.sort(function(a,b){return a.score-b.score}).slice(-1)[0])})

      // return json.sort(function(a,b){return (a.completed_games.sort(function(a,b){return a.score-b.score}).slice(-1)[0])-(b.completed_games.sort(function(a,b){return a.score-b.score}).slice(-1)[0])})[0].username
    })
  }

  static createUser(usernameInput){
    fetch(base_url + 'users', {
      headers: {'Content-Type':'application/json'},
      method: 'post',
      body: JSON.stringify({username:usernameInput})
    }).then(r=>r.json()).then(json=>{
      new User(json)
    })

  }

  static postScore(score){
    fetch(base_url +  'completed_games', {
      headers: {'Content-Type': 'application/json'},
      method: 'post',
      body: JSON.stringify({user_id: current_user.id, score:score})
    }).then(r=>r.json()).then(json=>{Adapter.leaderboard()})
  }

}
