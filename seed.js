// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

// var db = require('./models');

// var new_campsite = {description: "Sharp rocks. Middle of nowhere."}

// db.Campsite.create(new_campsite, function(err, campsite){
//   if (err){
//     return console.log("Error:", err);
//   }

//   console.log("Created new campsite", campsite._id)
//   process.exit(); // we're all done! Exit the program.
// })


//getting the moudles so I can use them to seed the dattabase
var db = require('./models');

//the data that is going to be in the datta base 
var chats_list = [
	
	{
		name: "Dave",
		message: "sup"
	},
	{
		name: "Dug",
		message: "not much you"
	},
	{
		name: "Dave",
		message: "just working on stuff, you?"
	},
	{
		name: "Dug",
		message: "stuck on a but, i hate mongoose's documentation"
	},
	{
		name: "Dave",
		message: "ya its bad your boned"
	},
	{
		name: "Dug",
		message: "I'm gana be up all night on this arnt i?"
	},
	{
		name: "Dave",
		message: " yaaaaaaaa..... see ya tomorrow "
	}

	//use for post later jsut putting it hear cus it kinda makes sence to store these hear
	// {
	// 	"name": "bill",
	// 	"message": "hey guys whats up its a new day and i think we can not suck to bad today"
	// }

];

//putting it in the datta base and whiping anything that might have been there befor
db.chat.remove({}, function(err, chats){
  if(err) {
    console.log('Error occurred in remove', err);
  } else {
    console.log('removed all chats');

    // create new records based on the array chats_list
    db.chat.create(chats_list, function(err, chats){
      if (err) { return console.log('err', err); }
      console.log("created", chats.length, "chats");
      process.exit();
    });
  }
});







