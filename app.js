
var express = require('express');
var path = require('path');
var app = express();

/*
app.get('/',function (req,res) {
  res.send('Hello mingks!');
});
*/
app.use(express.static(path.join(__dirname + '/public')));
app.listen(3000, function() {
  console.log('Server On!');
});

/*
var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3000);
*/
