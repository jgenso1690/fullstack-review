const request = require('request');
const config = require('../config.js');
const db = require('../database');

let getReposByUsername = (user) => {

  let options = {
    url: `https://api.github.com/users/${user}/repos`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };

  function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
      const info = JSON.parse(body);

      info.forEach(element=> {element.name , element.cdstargazers_count: stargazers_count})


      info.forEach(element => db.save(null,element))
      //db.save(null, info)
     // console.log(info.stargazers_count + " Stars");
     // console.log(info.forks_count + " Forks");
    }
  }

  request(options, callback);





  // TODO - Use the request module to request repos for a specific
  // user from the github API

  // The options object has been provided to help you out,
  // but you'll have to fill in the URL


}

module.exports.getReposByUsername = getReposByUsername;