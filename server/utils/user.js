class User{

  constructor(socketID, text=""){
      this.id = socketID; //this client's socket id
      this.text = text; //this user's current feelings
      this.room = null;
  }

  setText(text){
    this.text = text;
  }

  getRoom(){
    return this.room;
  }

  setRoom(id){
    //set this person's room id
    this.room = id;
  }

  clearRoom(id){
    //removes this person's room id
    this.room = null;
  }
  
}

module.exports = { User };