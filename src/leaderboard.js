leaderStore = []
class Leaderboard{

  constructor(){
    this.scores = []
    let gameContent = document.getElementById('game-content')
    leaderStore.push(this)
  }

  renderScores(){
    let sorted = scoreStore.sort((a,b)=>b.score-a.score)
    return sorted.map(score=>score.render()).join("")
  }

  render(){
    return `<div class="leaderboard">
    <ul>
      ${this.renderScores()}
    </ul>
    </div>`
  }
}
