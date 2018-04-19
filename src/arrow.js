let arrowId = 0
arrowStore = []

class Arrow{

	constructor(aim){
		this.id = ++arrowId
		this.arrow = document.createElement('div')
		this.arrow.className = `arrow`
		this.arrow.id = `arrow-${this.id}`
		this.arrow.innerHTML = `<div class="container">
				  <div class="red flame"></div>
				  <div class="orange flame"></div>
				  <div class="yellow flame"></div>
				  <div class="white flame"></div>
				  <div class="blue circle"></div>
				</div>`
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
			return (building.alive && parseInt(building.structure.style.left) <= parseInt(arrow.style.left) + 4 &&
					(parseInt(building.structure.style.left) + 20) > parseInt(arrow.style.left) + 4 &&
					parseInt(arrow.style.bottom) + 4 < (parseInt(building.structure.style.bottom) + 20) &&
					parseInt(arrow.style.bottom) + 4 > parseInt(building.structure.style.bottom))
		})
	}


	moveArrow(){
		let arrow = this.arrow
		// let arrow = arrowStore.find(arrowObj=>{return arrowObj.arrow.id.includes(arrowObj.id)}).arrow
		// let arrow = document.getElementsByClassName(`arrow`)[0]
		let aim = this.aim + parseInt(store[0].player.style.left) -5
		// console.log(arrow)
		function curve(){
			let collision = Arrow.checkCollision(arrow)
			if (collision!==undefined){
				arrow.innerHTML = `<div class="c2"><div class="container">
						  <div class="r2 f2"></div>
						  <div class="o2 f2"></div>
						  <div class="y2 f2"></div>
						  <div class="w2 f2"></div>
						  <div class="blue circle"></div>
							</div>
						</div>`
				//timeout funcs
				// setTimeout(function(){
					// arrow.innerHTML = `<div class="c2">
					// 		  <div class="r2 f2"></div>
					// 		  <div class="o2 f2"></div>
					// 		  <div class="y2 f2"></div>
					// 		  <div class="w2 f2"></div>
					// 		  <div class="b2 f2"></div>
					// 		</div>`
				// }, 800)
				// setTimeout(function(){
				// 	arrow.innerHTML = `<div class="c3">
				// 			  <div class="r3 f3"></div>
				// 			  <div class="o3 f3"></div>
				// 			  <div class="y3 f3"></div>
				// 			  <div class="w3 f3"></div>
				// 			  <div class="b3 f3"></div>
				// 			</div>`
				// }, 1200)
				setTimeout(function(){collision.structure.remove()}, 1500)
				setTimeout(function(){arrow.remove()}, 1500)
				//
				clearInterval(collision.interval)
				collision.alive = false
				// console.log('KILLED', collision.id)
				// structureStore.splice(structureStore.indexOf(Arrow.checkCollision(arrow), 1))
				Game.renderEnemyStructure()
				clearInterval(myInterval)
			}
			let left = parseInt(arrow.style.left)
			let bottom = parseInt(arrow.style.bottom)
			let distance = Math.abs(aim - left)
			if (left <= 980 && bottom >= 0) {
				arrow.style.left = `${left + 8}px`
			}
			if (left < aim) {
				arrow.style.bottom = `${bottom + Math.round(distance / 30.0)}px`
			} else {
				if (bottom >= 0 && left < 980) {
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
