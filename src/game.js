let level = 1
let timer = null
timerInterval = null

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
    EventListener.click()

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
    timer = new Timer
    gameContent.innerHTML += timer.render()


    // EventListener.keypress()
    // Game.renderEnemyStructure()
    // EventListener.playerMovement()
  }

  static startGame(){
    Game.renderGameplay()
    document.getElementById('start').remove()
    EventListener.keypress()
    timerInterval = setInterval(timer.increment, 1000)
    Game.renderEnemyStructure()
    gameOver = false
    new Player
  }



  static renderEnemyStructure(){
    new EnemyStructure(`${Math.floor(Math.random() * (580-450) + 450)}px`, level++)
  }

  static gameOver(){
    clearInterval(timerInterval)
    
    let start = document.createElement('h1')
    let area = document.getElementById('canvas')
    start.innerHTML = '<h1 id="restart">GAME OVER!!!!\n PLAY AGAIN?</>'
    area.appendChild(start)

  }


}
