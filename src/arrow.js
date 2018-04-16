class Arrow{

	constructor(){
		this.arrow = document.createElement('div')
	}

	shoot(){
		const area = document.getElementById('canvas')
		// const arrow = document.createElement('div')
		this.arrow.className = 'arrow'
		this.arrow.style.bottom = '0px'
		this.arrow.style.left = '0px'

		area.appendChild(this.arrow)
		this.moveArrow()
	}

	moveArrow(){
		let arrow = document.getElementsByClassName('arrow')[0]
		function curve(){
			arrow.style.left = `${parseInt(arrow.style.left) + 3}px`
			if (parseInt(arrow.style.left) < 300) {
				arrow.style.bottom = `${parseInt(arrow.style.bottom) +3}px`
			} else {
				arrow.style.bottom = `${parseInt(arrow.style.bottom) -3}px`
			}
		}
		window.requestAnimationFrame(curve)
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
