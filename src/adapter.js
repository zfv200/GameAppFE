console.log("adapter class hooked up")

class Adapter {

  static getUsers(){

  }

  static getUser(usernameInput){
    fetch('http://localhost:3000/api/v1/users', {
      headers: {'Content-Type': 'application/json'},
      method: 'get'
    }).then(r=>r.json()).then(json=>{
      let newUserJson = json.find(user=>user.username===usernameInput)
      new User(newUserJson)
    })
  }

}