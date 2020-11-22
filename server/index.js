const express = require('express');
const http = require('http');
// const fs = require('fs');
const path = require('path');
const PORT = process.env.PORT || 5000;
const app = express();
const socketio = require('socket.io');
const formatMessage = require('./utils/messages');
const {userJoin, getCurrUser, userLeave, userWaiting, lookforMatch} = require('./utils/users');
const botName = 'VenTalk bot'

const server = http.createServer(app); // express uses this
const io = socketio(server);

// set static folder
app.use(express.static(path.join(__dirname, '../client')));

io.on('connection', socket =>{
  socket.on('connection', ({username, input}) => {
    const user = userWaiting(socket.id, username, input);
    socket.emit('message', 
                formateMessaga(botName, 'Welcome! Please wait, you\'ll be matched soon'));
    lookforMatch();
    });

  socket.on('joinRoom', ({username, input}) => {
    const user = userJoin(socket.id, username, input);
    socket.join(user.input);

    socket.emit('message', 
                formatMessage(botName,'Welcome, we hope you will feel better!'));
  
    // Broadcast when a user connects (broadcasts to a specific room)
    socket.broadcast
      .to(user.input)
      .emit('message', formatMessage(botName,`${user.username} has joined the chat`));
  })

  // List for chat message
  socket.on('chatMessage', (msg) =>{
    const user = getCurrUser(socket.id);

    io.to(user.input).emit('message', formatMessage(user.username, msg));
  });

  // Client disconnected
  socket.on('disconnect', () => {
    const user = userLeave(socket.id);
    if(user){
      io.to(user.input)
        .emit('message', formatMessage(botName,`${user.username} has left the chat`));
    }
  });

});

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});

app.use('/',function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// mental health
// just chat
// connect me to emergency services
// event for user is typing and user is not typing