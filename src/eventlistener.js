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
			debugger
			if (e.target === 32){
				
			}
		})
	}
}