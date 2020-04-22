const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});

let repoSchema = mongoose.Schema({
  id : Number,
  name: String,
  stargazers_count: Number
    // TODO: your schema here!
});

 //creating a model base on Schema
 let Repo = mongoose.model('Repo', repoSchema);


let save = (err, repo) => {
  if (err) {
    return console.error(err);
  } else {
    var userdoc = new Repo();
    userdoc.name = repo.name
    userdoc.stargazers_count = repo.stargazers_count
    userdoc.save();
    console.log('success')
  }
}

  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB

module.exports.save = save;

