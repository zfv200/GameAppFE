let current_user = null

class User {
  constructor(json) {
    this.id = json.id
    this.username = json.username
    this.high_score = json.completed_games.sort(function(a,b){return a.score-b.score}).slice(-1)[0].score
    current_user = this
    document.getElementById('high-score').innerHTML = `<h1>High Score: ${this.high_score} seconds!</h1>`
  }
}
