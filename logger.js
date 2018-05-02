const fs = require('fs');
const os = require('os');
const dateFormat = require('dateformat');



// var log = function log(){
//   console.log('message logged');
// };

const format = 'UTC:yyyy-mm-dd\'T\'HH:MM:ss_lZ';
const separator = '|';

function getLogFileName(date, format) {

  logFileName = dateFormat(date, format);
  return logFileName += '.log';  
}

function timestamp(date, format) {
  
  var d;

  if (date) {
    d = date;
  } else {
    d = new Date();
  }


  return dateFormat(d, format);
};

module.exports.log = function log(data) {
  var d = new Date();

  var logFileName = getLogFileName(d, 'yyyymmdd');

  var msg = `${timestamp(d, format)}${separator}`;

  for (var i = 0; i < data.length; i++) {
    msg += data[i];

    if (i < data.length - 1) {
      msg += separator;
    } else {
      msg += os.EOL;
    }
  }

  console.log(msg);

  fs.appendFile(logFileName, msg, function (err) {
    if (err) throw err;
    //console.log('Saved!');
  });

};