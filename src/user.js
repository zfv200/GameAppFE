let current_user = null

class User {
  constructor(json) {
    this.id = json.id
    this.username = json.username
    current_user = this
    if (json.completed_games.length > 0){
    	this.high_score = `${json.completed_games.sort(function(a,b){return a.score-b.score}).slice(-1)[0].score} seconds!`
    } else{
    	this.high_score = 'First Time Playing!'
    }
    document.getElementById('high-score').innerHTML = `<h1>High Score: ${this.high_score}</h1>`
  }
}
