const express = require('express');
let app = express();
var bodyParser = require('body-parser');
const github = require('../helpers/github.js');
const db = require('../database');

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.post('/repos', function (req, res) {
  var username = Object.keys(req.body).toString();
  var gitInfo = github.getReposByUsername(username);


  // gitInfo.forEach(element => db.save(err,element))

  //db.save(err,eachrepo)

  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

