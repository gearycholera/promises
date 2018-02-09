/*
 * Write a function WITH NO CALLBACKS that,
 * (1) reads a GitHub username from a `readFilePath`
 *     (the username will be the first line of the file)
 * (2) then, sends a request to the GitHub API for the user's profile
 * (3) then, writes the JSON response of the API to `writeFilePath`
 *
 * HINT: We exported some similar promise-returning functions in previous exercises
 */

var fs = require('fs');
var Promise = require('bluebird');
var promisify = require('./promisification');
var promisicon = require('./promiseConstructor');



var fetchProfileAndWriteToFile = function(readFilePath, writeFilePath) {
  // TODO
  var promise = (promisicon.pluckFirstLineFromFileAsync(readFilePath)
    .then((result) =>
      promisify.getGitHubProfileAsync(result)
        .then((remult) =>
          fs.appendFile(writeFilePath, JSON.stringify(remult))      
        )
    ));
  return promise;
};

// Export these functions so we can test them
module.exports = {
  fetchProfileAndWriteToFile: fetchProfileAndWriteToFile
};
