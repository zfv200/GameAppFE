store = []

class Player{
  constructor(){
    this.player = document.createElement('div')
    this.player.id = "player"
    this.player.style.bottom = "0px"
    this.player.style.left = "0px"
    document.getElementById('canvas').appendChild(this.player)
    store.push(this)
  }

  moveLeft(){
    let left = this.player.style.left
    if (parseInt(left) > 0) {
      this.player.style.left = `${parseInt(left) - 2}px`
    }
  }

  moveRight(){
    let left = this.player.style.left
    if (parseInt(left) >= 0 && parseInt(left) < 290) {
      this.player.style.left = `${parseInt(left) + 2}px`
    }
  }


}
