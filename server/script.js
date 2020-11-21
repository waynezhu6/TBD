const socket = io('http://localhost:3000');
const messageContainer = document.getElementById('message-container');
const messageForm = document.getElementById('send-container')
const messageInput = document.getElementById('message-input');

const mood = prompt('How are you feeling right Now?');
appendMessage('You Joined');
socket.emit('new-venter', mood);

socket.on('chat-message', data => {
  appendMessage(`them: ${data.message}`);
})

socket.on('user-connected', mood => {
  appendMessage(`Someone has connected, they're feeilng ${mood}`);
})

socket.on('user-disconnected', mood  => {
  appendMessage(`They have disconnected`);
})

messageForm.addEventListener('submit', e => {
  e.preventDefault();
  const message = messageInput.value;
  appendMessage(`You: ${message}`);
  socket.emit('send-chat-message', message);
  messageInput.value = '';
})

function appendMessage(message) {
  const messageElement = document.createElement('div');
  messageElement.innerText = message;
  messageContainer.append(messageElement);
}