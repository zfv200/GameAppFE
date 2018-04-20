bloodStore = []

class Blood {
  constructor(){
    let canvas = document.getElementById('canvas')
    let blood = document.createElement('div')
    let player = store[0].player
    blood.className = "aftermath"
    blood.style.left = `${parseInt(player.style.left) + Math.round(Math.random() * 100) - 50}px`
    blood.style.bottom = `${parseInt(player.style.bottom) + Math.round(Math.random() * 100) - 50}px`
    canvas.appendChild(blood)
    bloodStore.push(blood)
  }

  static bloodLimit(){
    if (bloodStore.length > 125){
      for (let i = 0; i<10; i++){
        bloodStore[i].remove()
      }
      bloodStore.splice(0,10)
    }
  }

}
