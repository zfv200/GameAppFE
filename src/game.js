class Game {

  static renderLogin(){
    let gameContent = document.getElementById('game-content')
    let welcomeScreen = `
      <h3>Enter Your Username!</h3>
      <div id="welcome-content">
      <form id="user-form">
      <input id="user_name_input" type="text">
      <input type="submit">
      </form>
      </div>`
    gameContent.innerHTML = welcomeScreen
  }

  static renderGameplay(){

  }

  function start(){
    EventListener.shoo()
  }
}
