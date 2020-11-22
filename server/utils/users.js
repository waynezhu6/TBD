const {Person, matchUserFeelings, matchUserCasual, matchUsers} = require('./utils/people');

function addUser(id, username, feeling){
    //adds a user to user collection
    const user = { id, username, feeling};
    users.push(user);
    return user;
}

function getUser(id){
    // gets the user with this id
    return users.find(user => user.id == id);
}

function removeUser(id){
    //remove user from user collection
    const index = users.findIndex(user => user.id == id);
}

function userWaiting(id, username, input){
  const user = new Person(id, username, input);
  users.push(user);
  return user;
}

function lookforMatch(){
  matchUsers(totalUsers);
}

// Get Person in the feelings chat
function getFeelsUser(input){
  return users.filter(user => user.input == input);
}

module.exports = {
  userJoin, 
  getCurrUser,
  userLeave,
  userWaiting,
  getFeelsUser,
  lookforMatch
};

// alone in a rooom
// in a room with someone 
// not in a room