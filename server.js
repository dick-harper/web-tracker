const os = require('os');
const http = require('http');
const figlet = require('figlet');
const port = process.env.PORT || 3000;
const logger = require('./logger');

const handler = (req, res) => {
  var now = new Date;
  console.log(`Server received request from host ${req}`);
  
  var logData = [];
  var message = 'Welcome to Web-Tracker!';
  
  logData[0]= message;

  figlet(message, function (err, data) {
    if (err) {
      console.log('Something went wrong...');
      console.dir(err);
      return;
    }
    
    logger.log(logData);
    
    res.end(data);
    //res.end(`hello...${os.EOL}The time is ${now}${os.EOL}Client Address: ${req.connection.remoteAddress}${os.EOL}User Agent: ${req.headers['user-agent']}`);
  });

  
};

const server = http.createServer(handler); //.listen(port);

server.listen(port, err => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Server listening on port ${port}`);
  }
});