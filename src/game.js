let level = 1
let timer = null

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
    let gameContent = document.getElementById('game-content')
    let area = document.createElement('div')
    let highScore = document.createElement('div')
    highScore.id = "high-score"

    // timer = new Timer
    area.id = 'canvas'
    gameContent.innerHTML = ''
    gameContent.appendChild(area)
    gameContent.appendChild(highScore)
    // gameContent.innerHTML += timer.render()
    // timer.increment()

    let start = document.createElement('h1')
    start.id = 'start'
    start.innerHTML = 'START GAME'
    area.appendChild(start)
    EventListener.click()

    // EventListener.keypress()
    // Game.renderEnemyStructure()
    // EventListener.playerMovement()
  }

  static startGame(){
    let gameContent = document.getElementById('game-content')
    timer = new Timer
    gameContent.innerHTML += timer.render()
    timer.increment()
    EventListener.keypress()
    Game.renderEnemyStructure()
  }

  static renderEnemyStructure(){
    new EnemyStructure(`${Math.floor(Math.random() * (580-450) + 450)}px`, level++)
  }

  static gameOver(){
    let timer = document.getElementsByClassName(`timer`)[0]
    Adapter.postScore(parseInt(timer.textContent))
    let start = document.createElement('h1')
    let area = document.getElementById('canvas')
    start.id = 'start'
    start.innerHTML = '<h1 id="start">GAME OVER!!!!\n PLAY AGAIN?</>'
    area.appendChild(start)
    
  }


}
