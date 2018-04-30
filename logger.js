const fs = require('fs');
const dateFormat = require('dateformat');

// var log = function log(){
//   console.log('message logged');
// };

const format = 'UTC:yyyy-mm-dd\'T\'HH:MM:ss_lZ';
const separator = '|';

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

  var msg = `${timestamp(new Date(), format)}${separator}`;

  for (var i = 0; i < data.length; i++) {
    msg += data[i];

    if (i < data.length - 1) {
      msg += separator;
    }
  }

  console.log(msg);
};