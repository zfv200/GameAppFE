let enemyStructureId = 0
structureStore = []
let gameOver = false
backupStore = []

class EnemyStructure {
  constructor(positionLeft, level){
    this.id = ++enemyStructureId
    const area = document.getElementById('canvas')
    this.structure = document.createElement('div')
    this.structure.id = `enemy-structure-${this.id}`
    this.structure.className = 'enemy-structure'
    this.positionLeft = positionLeft
    this.structure.style.left = this.positionLeft
    this.structure.style.bottom = '0px'
    structureStore.push(this)
    backupStore.push(this)
    area.append(this.structure)
    this.alive = true
    this.interval = null



    this.level = level
    // console.log(`LEVEL ${level}`)
    switch(this.level){
        case 1:
            this.structure.className = "level-one-image"
            break
        case 2:
            this.structure.className = "level-two-image"
            this.jump()
            break
        case 3:
            this.structure.className = "level-two-image"
            this.jumpAndMove()
            break
        case 4:
            this.structure.className = "level-two-image"
            this.float()
            // this.abduct()
            break
        default:
            this.structure.className = "level-two-image"
            this.float()
            new EnemyStructure(`${Math.floor(Math.random() * (580-450) + 450)}px`, 4)
            break

    }

  }

  jump(){

    let startVelocity = 10
    let velocity = Math.floor(Math.random() * 7 + startVelocity)
    let end = 0 - velocity
    let delta = 1
    let structure = this.structure
    function move(){
        let bottom = parseInt(structure.style.bottom)
        let left = parseInt(structure.style.left)
        structure.style.bottom = `${bottom + velocity}px`
        velocity -= delta
        if (velocity < end){
            velocity = Math.floor(Math.random() * 3 + startVelocity)
            end = 0 - velocity
        }
    }

    this.interval = setInterval(move, 700 / (startVelocity * 2))
  }

  jumpAndMove(){

    let startVelocity = 10
    let velocity = Math.floor(Math.random() * 7 + startVelocity)
    let end = 0 - velocity
    let delta = 1
    let structure = this.structure
    let structureObject = this
    function move(){
        let bottom = parseInt(structure.style.bottom)
        let left = parseInt(structure.style.left)
        structure.style.bottom = `${bottom + velocity}px`
        structure.style.left = `${left - 2}px`
        velocity -= delta
        if (velocity < end){
            velocity = Math.floor(Math.random() * 3 + startVelocity)
            end = 0 - velocity
        }
        if (!gameOver){
            structureObject.checkCollision()
        }
    }



    this.interval = setInterval(move, 700 / (startVelocity * 2))

  }


  abduct(){
    const area = document.getElementById('canvas')
    let player = document.getElementsByClassName('player')[0]
    let structure = this.structure
    let ufoScan = document.createElement('div')
    ufoScan.id = 'ufo-scan'
    area.appendChild(ufoScan)
    structure.style.left = `${parseInt(player.style.left) + 10}px`
    ufoScan.style.left = `${parseInt(structure.style.left) + 20}px`
    structure.style.bottom = "580px"
    ufoScan.style.bottom = structure.style.bottom

    function movement(){
      structure.style.left = player.style.left
      ufoScan.style.left = `${parseInt(structure.style.left) + 6}px`
      if (parseInt(structure.style.bottom) > 70) {
        ufoScan.style.display = 'none'
        structure.style.bottom = `${parseInt(structure.style.bottom) - 2}px`
        ufoScan.style.bottom = `${parseInt(structure.style.bottom) -52}px`
      } else {
        ufoScan.style.display = 'block'
        //ufo reveal
      }
    }

    // function ufoMovement(){
    //   ufoScan.style.left = `${parseInt(structure.style.left) + 6}px`
    // }

    this.interval = setInterval(movement, 20)
  }

  float(){
    this.structure.style.bottom = '50px'
    let velocity = Math.floor(Math.random() * 20) - 9
    let structure = this.structure
    let count = Math.floor(Math.random() * 10)
    let dive = false
    let structureObject = this
    function move(){
        let bottom = parseInt(structure.style.bottom)
        let left = parseInt(structure.style.left)
        let distanceHori = left - parseInt(store[0].player.style.left)
        let distanceVert = bottom - parseInt(store[0].player.style.bottom)
        if (distanceHori < 80 && !dive){
            dive = true
            count = 5
        } else{
            structure.style.left = `${left - 5}px`
            if ((bottom + velocity) < 20 && velocity < 0){
                structure.style.bottom = `${bottom - velocity}px`
            } else if (bottom + velocity > 200 && velocity > 0){
                structure.style.bottom = `${bottom - velocity}px`
            } else{
                structure.style.bottom = `${bottom + velocity}px`
            }

        }
        if (dive){

            structure.style.bottom = `${bottom - (distanceVert / count)}px`
            structure.style.left = `${left - (distanceHori / count)}px`
        }
        count--
        if (count < 0){
            velocity = Math.floor(Math.random() * 20) - 9
            count = Math.floor(Math.random() * 5)
        }
        // console.log(count, velocity, bottom + velocity)
        if (!gameOver && structureStore.length>0){
            structureObject.checkCollision()
        }
        }



    this.interval = setInterval(move, 1000 / 10)


  }

  checkCollision(){
        let player = store[0].player
        if (this.alive && parseInt(this.structure.style.left) <= parseInt(player.style.left) + 10 &&
          (parseInt(this.structure.style.left) + 20) > parseInt(player.style.left) + 10 &&
          parseInt(player.style.bottom) + 10 < (parseInt(this.structure.style.bottom) + 20) &&
          parseInt(player.style.bottom) + 10 > parseInt(this.structure.style.bottom) &&
          structureStore.length>0) {
                        player.className = "defeated"
            level = 0
            gameOver = true
            console.log('GAME OVER')

            Game.gameOver()

        }
    }


}
