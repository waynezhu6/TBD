const {User, matchUserFeelings, matchUserCasual, matchUsers} = require('./utils/people');

class UserManager{

  constructor(){
    this.users = {}; //mapping socketID to user
    this.waiting = {}; //mapping socketID to user who is waiting

    this.threshold = 0.5 //minimum matching score standard
  }

  addUser(socketID, username, text){
    //adds a user to users dict
    const user = new User(socketID, username, text);
    users[socketID] = user;
    return user;
  }

  getUser(socketID){
    //gets the user with this socketID
    return this.users[socketID];
  }

  removeUser(socketID){
    //remove user from user collection
    delete this.users[socketID];
  }

  addToWaiting(socketID){
    //marks this user as waiting for match
    let user = getUser(socketID);
    this.waiting[socketID] = user;
  }

  removeFromWaiting(socketID){
    //removes this user from waiting
    let user = getUser(socketID);
    delete this.waiting[socketID];
  }

  findMatch(socketID){
    //returns socketID of best matching user to this user
    //otherwise send to waiting if no match was made
    let user = getUser(socketID);
    let maxScore = -Infinity;
    let best = null;

    for(const key in Object.keys(this.waiting)){
      if(key != socketID){
        let score = getSimilarity(user.text, this.users[key].text);
        if(score > maxScore && score >= this.threshold)
          best = key;
      }
    }

    if(best == null)
      this.addToWaiting(socketID);
    else
      this.removeFromWaiting(best);
  }
}

module.exports = { UserManager };