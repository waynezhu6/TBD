const {Person, matchUserFeelings, matchUserCasual, matchUsers} = require('./utils/people');

const totalUsers = [];  // can change to database
const usersInChat = []; // users currently in chat 

function userJoin(id, username, input){
  const user = {id, username, input};
  usersInChat.push(user);
  return user;
}

// get the current user
function getCurrUser(id){
  return users.find(users => users.id == id);
}

// user leaving chat
function userLeave(id){
  const index = usersInChat.findIndex(user => user.id == id);

  if(index != -1){
      return users.splice(index, 1)[0];
  }
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