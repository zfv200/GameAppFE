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
        new User(newUserJson)
      }
    })
  }

  // static bestPlayer(){
  //   fetch(base_url + 'users', {
  //     headers: {'Content-Type': 'application/json'},
  //     method: 'get'
  //   }).then(r=>r.json()).then(json=>{
  //     return json.sort(function(a,b){return (a.completed_games.sort(function(a,b){return a.score-b.score}).slice(-1)[0])-(b.completed_games.sort(function(a,b){return a.score-b.score}).slice(-1)[0])})[0].username
  //   })
  // }

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
    }).then(r=>r.json()).then(json=>console.log(json))
  }

}
