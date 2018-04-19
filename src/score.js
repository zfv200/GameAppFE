scoreStore = []
class Score {
  constructor(player, score) {
    this.player = player
    this.score = score
    scoreStore.push(this)
  }

  render(){
    return `<li>${this.player}: ${this.score}</li>`
  }
}
