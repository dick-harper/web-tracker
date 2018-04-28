const http = require('http');

const port = process.env.PORT || 3000;

const handler = (req, res) => {
  console.log('Server received request.');
  res.send('hello...');
};

const server = http.createServer(handler);