class Arrow{

	constructor(user_id){
		this.arrow = document.createElement('div')
		this.user_id = user_id
	}

	shoot(){
		const area = document.getElementById('canvas')
		// const arrow = document.createElement('div')
		this.arrow.className = `arrow`
		this.arrow.style.bottom = '0px'
		this.arrow.style.left = store[0].player.style.left

		area.appendChild(this.arrow)
		this.moveArrow()
	}

	moveArrow(){
		let arrow = document.getElementsByClassName(`arrow`)[0]
		function curve(){
			let left = parseInt(arrow.style.left)
			let bottom = parseInt(arrow.style.bottom)
			let distance = Math.abs(290 - left)
			if (left < 580 && bottom >= 0) {
				arrow.style.left = `${left + 8}px`
			}
			if (left < 290) {
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
