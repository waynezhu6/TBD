const users = [];  // can change to database

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

    if(index != -1){
        return users.splice(index, 1)[0];
    }
}

function getFeelsUser(feelings){
    // Get Person in the feelings chat
    return users.filter(user => user.room == room);
}

module.exports = {
    userJoin, 
    getCurrUser,
    userLeave,
    getFeelsUser
};