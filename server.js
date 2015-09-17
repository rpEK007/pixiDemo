var express = require('express');
var path = require('path');

var app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.listen(process.env.PORT || 3000, function(){
  console.log('Express server listening on port ' + (process.env.PORT || 3000));
});