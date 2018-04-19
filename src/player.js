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
    this.target.style.bottom = '60px'
    this.target.style.left = '105px'
    canvas.appendChild(this.target)

    store.push(this)
  }

  moveAimUp(){
    this.moveAimByPx(4)
  }

  moveAimDown(){
    this.moveAimByPx(-4)
  }

  moveLeft(){
    this.movePlayerByPx(-5)
  }

  moveRight(){
    this.movePlayerByPx(5)
  }

  movePlayerByPx(px){
    let playerLeft = parseInt(this.player.style.left)
    let targetLeft = parseInt(this.target.style.left)
    if (playerLeft >= 0){// && playerLeft <= 400) {
      this.player.style.left = `${playerLeft + px}px`
      this.target.style.left = `${targetLeft + px}px`
    }
    if (parseInt(this.player.style.left) > 400){
      temp = 1
      // this.player.style.left = `400px`
      // this.target.style.left = `505px`
    } else if (parseInt(this.player.style.left) < 0){
      this.player.style.left = `0px`
      this.target.style.left = `105px`
    }
  }

  moveAimByPx(px){
    let targetBottom = parseInt(this.target.style.bottom)
    if (targetBottom >= 35 && targetBottom <= 85) {
      this.target.style.bottom = `${targetBottom + px}px`
    }
    if (parseInt(this.target.style.bottom)> 85){
      this.target.style.bottom = '85px'
    } else if (parseInt(this.target.style.bottom) < 35){
      this.target.style.bottom = '35px'
    }
    this.aim = 150 + ((parseInt(this.target.style.bottom) - 35) * 5)
  }




}
