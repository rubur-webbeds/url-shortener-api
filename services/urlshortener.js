var base62 = require("base62/lib/ascii");

function shortenURL(longURL){
    var rand = require('random-seed').create(longURL);
    var n = rand(100) + 1000;

    return base62.encode(n);
}

module.exports = shortenURL;