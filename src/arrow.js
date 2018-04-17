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

	moveAim(){

	}

	moveArrow(){
		let arrow = document.getElementsByClassName(`arrow`)[0]
		let aim = this.aim
		function curve(){
			let left = parseInt(arrow.style.left)
			let bottom = parseInt(arrow.style.bottom)
			let distance = Math.abs(aim - left)
			if (left < 580 && bottom >= 0) {
				arrow.style.left = `${left + 8}px`
			}
			if (left < aim) {
				arrow.style.bottom = `${bottom + Math.round(distance / 30.0)}px`
			} else {
				if (bottom >= 0) {
					arrow.style.bottom = `${bottom - Math.round(distance / 30.0)}px`
				} else{
					if (arrow.parentNode !== null){
						arrow.parentNode.removeChild(arrow)
					}
				}
			}
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
