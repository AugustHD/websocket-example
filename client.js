import WebSocket from 'ws';

// Connect to the WebSocket server
const ws = new WebSocket('ws://localhost:8080');

ws.on('open', function open() {
  console.log('Connected to the WebSocket server');

  // Send a message to the server
  ws.send('Hello, server!');
});

ws.on('message', function incoming(data) {
  console.log('Received from server: %s', data);
});

// Optionally, handle the connection close event
ws.on('close', () => {
  console.log('Disconnected from the WebSocket server');
});
