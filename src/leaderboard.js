leaderStore = []
class Leaderboard{

  constructor(){
    this.scores = []
    let gameContent = document.getElementById('game-content')
    leaderStore.push(this)
  }

  renderScores(){
    let sorted = scoreStore.sort((a,b)=>b.score-a.score)
    return sorted.slice(0,10).map(score=>score.render()).join("")
  }

  render(){
    return `<div class="leaderboard">
    <h1>Top Scores</h1>
    <ol>
      ${this.renderScores()}
    </ol>
    </div>
    ${Gameplay.render()}`
  }
}
