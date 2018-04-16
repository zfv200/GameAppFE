console.log("user class hooked up")
class User {
  constructor(json) {
    this.id = json.id
    this.username = json.username
  }
}
