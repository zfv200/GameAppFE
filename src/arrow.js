class Arrow{

	constructor(aim){
		this.arrow = document.createElement('div')
		this.aim = aim
	}

	shoot(){
		const area = document.getElementById('canvas')
		// const arrow = document.createElement('div')
		this.arrow.className = `arrow`
		this.arrow.style.bottom = store[0].target.style.bottom
		this.arrow.style.left = store[0].target.style.left

		area.appendChild(this.arrow)
		this.moveArrow()
	}


	static checkCollision(arrow){
		return structureStore.find(building=>{
			return (parseInt(building.structure.style.left) <= parseInt(arrow.style.left) &&
					(parseInt(building.structure.style.left) + 20) > parseInt(arrow.style.left) &&
					parseInt(arrow.style.bottom) < 20)
		})
	}

	moveArrow(){
		let arrow = document.getElementsByClassName(`arrow`)[0]
		let aim = this.aim + parseInt(store[0].player.style.left)
		console.log(aim)
		function curve(){
			if (Arrow.checkCollision(arrow)!==undefined){
				Arrow.checkCollision(arrow).structure.remove()
				arrow.remove()
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
						}
					}
				}
			}

			console.log(arrow.style.bottom, arrow.style.left)
		}

		setInterval(curve, 22)

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
