class EventListener{



	static login(){
		let form = document.getElementById('user-form')
		form.addEventListener('submit', function(e){
			e.preventDefault()
			Adapter.getUser(e.target.user_name_input.value)
			Game.renderGameplay()
		})
	}


	static keypress(){
		let player = new Player
		document.addEventListener('keydown', function(e){
			
			if (e.which === 32){
				e.preventDefault()
				if (document.getElementsByClassName(`arrow`)[0] === undefined){
					let arrow = new Arrow()
					arrow.shoot()
				}
			} else if (e.which===39){
				player.moveRight()
			} else if (e.which===37){
				player.moveLeft()
			}
		})
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
