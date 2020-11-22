const express = require('express');
const http = require('http');
const path = require('path');
const socketIO = require('socket.io');
const formatMessage = require('./utils/messages');
const {addUser, getUser, removeUser} = require('./utils/users');

const PORT = process.env.PORT || 5000;
const botName = 'VenTalk bot'

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

io.on('connection', socket => {

  socket.on('requestRoom', ({username, feeling}) => {
    //user makes a request to join room
    const user = addUser(socket.id, username, feeling);
    socket.join(user.feeling);
  
    // Broadcast when a user connects (broadcasts to a specific room)
    socket.broadcast
      .to(user.feeling)
      .emit('message', formatMessage(botName,`${user.usrname} has joined the chat`));
  })

  // List for chat message
  socket.on('chatMessage', (msg) =>{
    const user = getCurrUser(socket.id);

    io.to(user.feeling).emit('message', formatMessage(user.username, msg));
  });

  // Client disconnected
  socket.on('disconnect', () => {
    const user = userLeave(socket.id);
    if(user){
      io.to(user.feeling)
        .emit('message', formatMessage(botName,`${user.username} has left the chat`));
    }
  });

});

// mental health
// just chat
// connect me to emergency services
// event for user is typing and user is not typing