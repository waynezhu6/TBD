class User{

  constructor(socketID, username, text){
      this.id = socketID; //this client's socket id
      this.username = username; //this client's username
      this.text = text; //this user's current feelings
  }
  
}

module.exports = { User };