let enemyStructureId = 0
structureStore = []

class EnemyStructure {
  constructor(positionLeft, structure){
    this.id = ++enemyStructureId
    const area = document.getElementById('canvas')
    this.structure = document.createElement('div')
    this.structure.id = `enemy-structure-${this.id}`
    this.structure.className = 'enemy-structure'
    this.positionLeft = positionLeft
    this.structure.style.left = this.positionLeft
    this.structure.style.bottom = '0px'
    structureStore.push(this)
    area.append(this.structure)
    this.jump()
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
        structure.style.left = `${left - 2}px`
        velocity -= delta
        if (velocity < end){
            velocity = Math.floor(Math.random() * 3 + startVelocity)
            end = 0 - velocity
        }
    }

    setInterval(move, 700 / (startVelocity * 2))
  }


}
