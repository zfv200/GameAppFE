let arrowId = 0
arrowStore = []

class Arrow{

	constructor(aim){
		this.id = ++arrowId
		this.arrow = document.createElement('div')
		this.arrow.className = `arrow`
		this.arrow.id = `arrow-${this.id}`
		this.aim = aim
		arrowStore.push(this)
	}

	shoot(){
		const area = document.getElementById('canvas')
		// const arrow = document.createElement('div')
		this.arrow.style.bottom = store[0].target.style.bottom
		this.arrow.style.left = store[0].target.style.left

		area.appendChild(this.arrow)
		this.moveArrow()
	}



	static checkCollision(arrow){
		return structureStore.find(building=>{
			return (parseInt(building.structure.style.left) <= parseInt(arrow.style.left) &&
					(parseInt(building.structure.style.left) + 20) > parseInt(arrow.style.left) &&
					parseInt(arrow.style.bottom) < (parseInt(building.structure.style.bottom) + 20) &&
					parseInt(arrow.style.bottom) > parseInt(building.structure.style.bottom))
		})
	}


	moveArrow(){
		let arrow = this.arrow
		// let arrow = arrowStore.find(arrowObj=>{return arrowObj.arrow.id.includes(arrowObj.id)}).arrow
		// let arrow = document.getElementsByClassName(`arrow`)[0]
		let aim = this.aim + parseInt(store[0].player.style.left) -5
		// console.log(arrow)
		function curve(){
			if (Arrow.checkCollision(arrow)!==undefined){
				Arrow.checkCollision(arrow).structure.remove()
				structureStore.splice(structureStore.indexOf(Arrow.checkCollision(arrow), 1))
				arrow.remove()
				Game.renderEnemyStructure()
				clearInterval(myInterval)
			}
			let left = parseInt(arrow.style.left)
			let bottom = parseInt(arrow.style.bottom)
			let distance = Math.abs(aim - left)
			if (left <= 580 && bottom >= 0) {
				arrow.style.left = `${left + 8}px`
			}
			if (left < aim) {
				arrow.style.bottom = `${bottom + Math.round(distance / 30.0)}px`
			} else {
				if (bottom >= 0 && left < 580) {
					arrow.style.bottom = `${bottom - Math.round(distance / 30.0)}px`
				} else{
					if (arrow.parentNode !== null){
						arrow.parentNode.removeChild(arrow)

						clearInterval(myInterval)
					}
				}
			}



			// console.log(arrow.style.bottom, arrow.style.left)
			// console.log(aim)
		}

		let myInterval = setInterval(curve, 22)


	}


	// moveArrow(){
	// 	debugger
	// 	let top = this.parse()
	// 	if (top < 600){
  //       	this.arrow.style.top = `${top += 3}px`
  //       	window.requestAnimationFrame(this.moveArrow)
  //       }
	// }
	//
	// parse(){
	// 	return parseInt(this.arrow.style.top.replace('px',''))
	// }


}
