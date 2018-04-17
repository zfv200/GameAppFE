store = []

class Player{
  constructor(){
    this.player = document.createElement('div')
    this.player.className = "player"
    this.player.style.bottom = "0px"
    this.player.style.left = "0px"
    this.aim = 225
    let canvas = document.getElementById('canvas')
    canvas.appendChild(this.player)

    this.target = document.createElement('div')
    this.target.className = 'target'
    this.target.style.bottom = '20px'
    this.target.style.left = '25px'
    canvas.appendChild(this.target)

    store.push(this)
  }

  moveAimUp(){
    this.moveAimByPx(2)
  }

  moveAimDown(){
    this.moveAimByPx(-2)
  }

  moveLeft(){
    this.movePlayerByPx(-2)
  }

  moveRight(){
    this.movePlayerByPx(10)
  }

  movePlayerByPx(px){
    let playerLeft = parseInt(this.player.style.left)
    let targetLeft = parseInt(this.target.style.left)
    if (playerLeft >= 0 && playerLeft <= 290) {
      this.player.style.left = `${playerLeft + px}px`
      this.target.style.left = `${targetLeft + px}px`
    }
    if (parseInt(this.player.style.left) > 290){
      this.player.style.left = `290px`
      this.target.style.left = `315px`
    } else if (parseInt(this.player.style.left) < 0){
      this.player.style.left = `0px`
      this.target.style.left = `25px`
    }
  }

  moveAimByPx(px){
    let targetBottom = parseInt(this.target.style.bottom)
    if (targetBottom >= 5 && targetBottom <= 35) {
      this.target.style.bottom = `${targetBottom + px}px`
    }
    if (parseInt(this.target.style.bottom)> 35){
      this.target.style.bottom = '35px'
    } else if (parseInt(this.target.style.bottom) < 5){
      this.target.style.bottom = '5px'
    }
    this.aim = 150 + ((parseInt(this.target.style.bottom) - 5) * 5)
  }

  


}
