const http = require('http');

const port = process.env.PORT || 3000;

const handler = function(req, res) {
  var now = new Date;
  //console.log('Server received request.');

  res.end(`hello...the time is ${now}`);
};

// const handler = (req, res) => {
//   var now = new Date;
//   //console.log('Server received request.');

//   res.end(`hello...the time is ${now}`);
// };

const server = http.createServer(handler);

server.listen(port, err => {
  if (err) {
    console.log(err);
  } else {
    //console.log(`Server listening on port ${port}`);
  }
});