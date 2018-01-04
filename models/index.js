
//getting moungoose so I can set up my dattabase
var mongoose = require("mongoose");

//telling moungoose where my dattabase is both on my local dir and on heroku
mongoose.connect( process.env.MONGODB_URI || "mongodb://localhost/personal-api");

// module.exports.Campsite = require("./campsite.js.example");

//bringing in and sending out chat to any one who gets index.js
module.exports.chat = require("./chat.js");

