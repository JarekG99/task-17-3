var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var fs = require('fs')
var stringifyFile ;

app.use(bodyParser.json());

app.get('/', function(req, res) {
   res.send('Otrzymałem żądanie GET do strony gł');
});

app.get('/getNote', function(req, res) {
    fs.readFile('./test.json', 'utf8', function(err, data) { //console.log(data);
      if (err) throw err;
      stringifyFile = data;
    res.send(data);
  });
    
});

app.post('/updateNote/:note', function(req, res) {
  fs.readFile('./test.json', 'utf8', function(err, data) {
    try {
      var dataArray = JSON.parse(data);
    } catch (e) {
      var dataArray = [];
    }

    dataArray = Array.isArray(dataArray) ? dataArray : [];

    dataArray.push(req.params.note);
    stringifyFile = JSON.stringify(dataArray);

    fs.writeFile('./test.json', stringifyFile, function(err) {
      if (err) throw err;
      console.log('file updated');
      res.send('hello');
    });
  });
});


var server = app.listen(3000);


// app.use(function (req, res, next) {
//     res.status(404).send('Wybacz, nie mogliśmy odnaleźć tego, czego żądasz!')
// });
