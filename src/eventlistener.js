class EventListener{



	static login(){
		let form = document.getElementById('user-form')
		form.addEventListener('submit', function(e){
			e.preventDefault()
			Adapter.getUser(e.target.user_name_input.value)
			Game.renderGameplay()
		})
	}


	static shoot(){
		document.addEventListener('keydown', function(e){
			e.preventDefault()
			if (e.which === 32){
				let arrow = new Arrow()
				arrow.shoot()
			}
		})
	}

	static playerMovement(){
		let player = new Player
		document.addEventListener('keydown', function(e){
			if (e.which===39){
				player.moveRight()
			} else if (e.which===37){
				player.moveLeft()
			}
		})
	}
}
