const express = require('express');
const http = require('http');
const path = require('path');
const socketIO = require('socket.io');
const { formatMessage } = require('./utils/messages');
const UserManager = require('./utils/userManager');

const PORT = process.env.PORT || 5000;

const app = express();
const server = http.createServer(app); // express uses this

// set static folder
app.use(express.static(path.join(__dirname, '../client')));

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});

app.use('/',function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

const io = socketIO.listen(server);
const userManager = new UserManager();

io.on('connection', socket => {

  //create a user upon connecting
  userManager.addUser(socket.id);
  console.log(socket.id);

  socket.on('requestRoom', async (data) => {
    //user makes a request to join room
    let user = userManager.getUser(socket.id);
    user.setText(data.text);
    let res = await userManager.findMatch(socket.id); 
    socket.join(res[1]);
    if(res[0]){
      console.log(40);
      socket.to(res[1]).emit('roomCreated');
      socket.emit('roomCreated');
    }
  });

  socket.on('sendMessage', (data) => {
    //send a message to the other person in this room
    console.log('sendMessage');
    const user = userManager.getUser(socket.id);
    console.log(user);
    console.log(socket.rooms);
    socket.emit('recieveMessage', {message: data, id: socket.id});
  });

  socket.on('disconnect', () => {
    //event on disconnect
    console.log("quit: " + socket.id);
    let user = userManager.removeUser(socket.id);
    if(user)
      io.to(socket.id).emit('message', formatMessage(`${user.username} has left the chat`));
  });

});

// // Broadcast when a user connects (broadcasts to a specific room)
// socket.broadcast
//   .to(user.input)
//   .emit('message', formatMessage(`${user.username} has joined the chat`));