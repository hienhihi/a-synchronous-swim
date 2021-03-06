const fs = require('fs');
const path = require('path');
const headers = require('./cors');
const multipart = require('./multipartUtils');

// Path for the background image ///////////////////////
module.exports.backgroundImageFile = path.join('.', 'background.jpg');
////////////////////////////////////////////////////////

let messageQueue = null;
module.exports.initialize = (queue) => {
  messageQueue = queue;
};

module.exports.router = (req, res, next = ()=>{}) => {
  console.log('Serving request type ' + req.method + ' for url ' + req.url);
  // console.log(res)
  res.writeHead(200, headers);
  if (req.method === 'GET') {
      var options = ['up', 'down', 'left', 'right'];
      var movement = options[Math.floor(Math.random() * 4) + 0];
      res.end(movement);
    }

  next(); // invoke next() at the end of a request to help with testing!
};

