const users = [];  // can change to database

function userJoin(id, username, feeling){
    const user = { id, username, feeling};
    users.push(user);
    return user;
}

// get the current user
function getCurrUser(id){
    return users.find(user => user.id == id);
}

// user leaving chat
function userLeave(id){
    const index = users.findIndex(user => user.id == id);

    if(index != -1){
        return users.splice(index, 1)[0];
    }
}

// Get Person in the feelings chat
function getFeelsUser(feelings){
    return users.filter(user => user.room == room);
}

module.exports = {
    userJoin, 
    getCurrUser,
    userLeave,
    getFeelsUser
};