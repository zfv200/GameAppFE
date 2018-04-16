class Arrow{
	
	constructor(){
		this.arrow = document.createElement('div')
	}

	shoot(){
		const area = document.getElementById('canvas')
		// const arrow = document.createElement('div')
		this.arrow.className = 'arrow'
		this.arrow.style.bottom = '0px'

		area.appendChild(this.arrow)
		debugger
		window.requestAnimationFrame(this.moveArrow)
	}

	moveArrow(){
		debugger
		let top = this.parse()
		if (top < 600){
        	this.arrow.style.top = `${top += 3}px`
        	window.requestAnimationFrame(this.moveArrow)
        }
	}

	parse(){
		return parseInt(this.arrow.style.top.replace('px',''))
	}


}