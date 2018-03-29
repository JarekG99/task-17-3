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
    fs.readFile('./test.json', 'utf8', function(err, data) {
      if (err) throw err;
      stringifyFile = data;
    res.send(data);
  });
    console.log(data);
});

app.post('/updateNote/:note', function(req, res) {
    stringifyFile += req.params.note;
  fs.writeFile('./test.json', stringifyFile, function(err) {
    if (err) throw err;
    console.log('file updated');

  });
});


var server = app.listen(3000);


// app.use(function (req, res, next) {
//     res.status(404).send('Wybacz, nie mogliśmy odnaleźć tego, czego żądasz!')
// });
