const { User } = require('./user');
const { getSimilarity } = require('./messages');
const { v4: uuidv4 } = require('uuid');

class UserManager{

  constructor(){
    this.users = {}; //mapping socketID to user
    this.waiting = {}; //mapping socketID to user who is waiting

    this.threshold = 0.5 //minimum matching score standard

    //testing stuff
    let testUser = new User(12345, "apples and orange");
    this.users = {12345: testUser}; //mapping socketID to user
    this.waiting = {12345: testUser}; //mapping socketID to user who is waiting
    testUser.setRoom(this.getUUID());
  }

  addUser(socketID){
    //adds a user to users dict
    const user = new User(socketID);
    this.users[socketID] = user;
    return user;
  }

  getUser(socketID){
    //gets the user with this socketID
    return this.users[socketID];
  }

  removeUser(socketID){
    //remove user from user collection
    let user = this.users[socketID];
    delete this.users[socketID];
    if(user in this.waiting){
      delete this.waiting[user];
    }
    return user;
  }

  addToWaiting(socketID){
    //marks this user as waiting for match
    let user = this.getUser(socketID);
    this.waiting[socketID] = user;
  }

  removeFromWaiting(socketID){
    //removes this user from waiting
    delete this.waiting[socketID];
  }

  async findMatch(socketID){
    //returns socketID of best matching user to this user
    //otherwise send to waiting if no match was made
    let user = this.getUser(socketID);
    let maxScore = -Infinity;
    let best = null;

    for(const key of Object.keys(this.waiting)){
      if(key != socketID){
        let score = await getSimilarity(user.text, this.waiting[key].text);
        if(score > maxScore && score >= this.threshold){
          best = key;
          maxScore = score;
        }
      }
    }

    if(best == null){
      this.addToWaiting(socketID);
      let uuid = this.getUUID();
      user.setRoom(uuid);
      console.log(uuid, 65);
      return [false, uuid];
    }
    else{
      let bestUser = this.getUser(best);
      user.setRoom(bestUser.getRoom());
      this.removeFromWaiting(best);
      console.log(bestUser.getRoom(), 76);
      return [true, bestUser.getRoom()];
    }
  }

  getUUID(){
    return uuidv4();
  }
}

module.exports = UserManager;