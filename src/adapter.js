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
    debugger
    fetch(base_url +  'completed_games', {
      headers: {'Content-Type': 'application/json'},
      method: 'post',
      body: JSON.stringify({user_id: current_user.id, score:score})
    }).then(r=>r.json()).then(json=>console.log(json))
  }

}
