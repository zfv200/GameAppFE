let timerId = 0

class Timer{

  constructor(){
    this.id = ++timerId
  }

  render(){
    return `
      <div id="timer-${this.id}" class="timer"><h1>0</h1>
      </div>
    `
  }

  increment(){
    let target = document.getElementsByClassName(`timer`)[0]
    target.innerHTML = `<h1>${parseInt(target.innerText)+1}</h1>`
  }
}
