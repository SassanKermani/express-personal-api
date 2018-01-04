//getting the monguse stuff so you can make the stuff
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

//the Schema for chat 
var chatSchema = new Schema({

	name: String,
	message: String

});

//the modle for chat
var chat = mongoose.model('chat', chatSchema);

//send this to index.js
module.exports = chat;