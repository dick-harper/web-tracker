const http = require('http');

const port = process.env.PORT || 3000;

const handler = (req, res) => {
  var now = new Date;
  console.log(`Server received request from host ${req}`);

  res.end(`hello...the time is ${now}, host: ${req.headers['host']}, user agent: ${req.headers['user-agent']}`);
};

const server = http.createServer(handler); //.listen(port);

server.listen(port, err => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Server listening on port ${port}`);
  }
});