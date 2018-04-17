let current_user = null

class User {
  constructor(json) {
    this.id = json.id
    this.username = json.username
    current_user = this
  }
}
