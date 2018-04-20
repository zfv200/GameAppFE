class EventListener{



	static login(){
		let form = document.getElementById('user-form')
		form.addEventListener('submit', function(e){
			e.preventDefault()
			Adapter.getUser(e.target.user_name_input.value)
			Game.renderGameplay()
		})
	}

	static click(){
		document.addEventListener('click', function(e){
			if (e.target.id === 'start'){
				console.log('STARTING GAME')
				e.target.remove()
				document.getElementById('canvas').innerHTML = ''
				Game.startGame()

			} else if (e.target.id === 'restart'){
				let gameContent = document.getElementById('game-content')
				gameContent.innerHTML = ''
				level = 1
				structureStore.forEach(enemy=>{
					clearInterval(enemy.interval)
					enemy.alive = false
					// console.log('KILLED', enemy.id)
					})
				structureStore = []
				store = []
				document.removeEventListener('keydown', EventListener.playerKeys, true)
				// level = 1
				// EventListener.keypress()
				Game.startGame()
			}
		})
	}

	static playerKeys(e){
		let player = store[0]

		if (e.which === 32 || e.which === 70 ){
			e.preventDefault()
		}else if (e.which===39){
			e.preventDefault()
			player.moveRight()
		} else if (e.which===37){
			e.preventDefault()
			player.moveLeft()
		} else if (e.which === 38){
			e.preventDefault()
			player.moveAimUp()
		} else if (e.which === 40){
			e.preventDefault()
			player.moveAimDown()
		}
	}

	static keypress(){
		document.addEventListener('keydown', EventListener.playerKeys)
	}

	static shootKey(e){
		let player = store[0]
		if (e.which === 32 || e.which === 70 ){
			e.preventDefault()
			if (!gameOver){
				let arrow;
				new Arrow(player.aim)
				arrow = arrowStore.slice(-1)[0]
				arrow.shoot()
			}
		}
	}

	static keyup(){
		document.addEventListener('keyup', EventListener.shootKey)
	}

	// static playerMovement(){
	// 	let player = new Player
	// 	document.addEventListener('keydown', function(e){
	// 		if (e.which===39){
	// 			player.moveRight()
	// 		} else if (e.which===37){
	// 			player.moveLeft()
	// 		}
	// 	})
	// }
}
