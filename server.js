import { WebSocketServer } from 'ws';

// Create a WebSocket server listening on port 8080
const wss = new WebSocketServer({ port: 8080 });

wss.on('connection', function connection(ws) {
  console.log('A new client connected');

  // Send a welcome message to the newly connected client
  ws.send('Welcome to the WebSocket server!');

  // Listen for messages from the client
  ws.on('message', function incoming(message) {
    console.log('received: %s', message);

    // Echo the received message back to the client
    ws.send(`You said: ${message}`);
  });

  // Notify when the client disconnects
  ws.on('close', () => {
    console.log('Client disconnected');
  });
});

console.log('WebSocket server is running on ws://localhost:8080');
