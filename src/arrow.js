class Arrow{

	constructor(){
		this.arrow = document.createElement('div')
	}

	shoot(){
		const area = document.getElementById('canvas')
		// const arrow = document.createElement('div')
		this.arrow.className = 'arrow'
		this.arrow.style.bottom = '0px'
		this.arrow.style.left = store[0].player.style.left

		area.appendChild(this.arrow)
		this.moveArrow()
	}

	moveArrow(){
		let arrow = document.getElementsByClassName('arrow')[0]
		function curve(){
			if (parseInt(arrow.style.left) < 580 && parseInt(arrow.style.bottom) >= 0) {
				arrow.style.left = `${parseInt(arrow.style.left) + 3}px`
			}
			if (parseInt(arrow.style.left) < 300) {
				arrow.style.bottom = `${parseInt(arrow.style.bottom) +3}px`
			} else {
				if (parseInt(arrow.style.bottom) >= 0) {
					arrow.style.bottom = `${parseInt(arrow.style.bottom) -3}px`
				}
			}
		}
		setInterval(curve, 17)
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
