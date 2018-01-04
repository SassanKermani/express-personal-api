// require express and other modules
var express = require('express'),
    app = express();

// parse incoming urlencoded form data
// and populate the req.body object
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/************
 * DATABASE *
 ************/

 var db = require('./models');

/**********
 * ROUTES *
 **********/

// Serve static files from the `/public` directory:
// i.e. `/images`, `/scripts`, `/styles`
app.use(express.static('public'));

/*
 * HTML Endpoints
 */

app.get('/', function homepage(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


/*
 * JSON API Endpoints
 */

app.get('/api', function api_index(req, res) {
  // TODO: Document all your api endpoints below

  //the profile endpoint desccription that is required for homework
  let myObject = {
    endpoint: "api/profile",
    name: "Sassan",
    github: "https://github.com/SassanKermani?tab=repositories",
    githubImg: "https://avatars0.githubusercontent.com/u/34021065?s=400&u=09946079dbfc14f2239a3f2e4c038e7f47b5e2b2&v=4",
    currentCity: "Louisville",

    pet: {
      name: "midnight",
      type: "cat",
      breed: "na",
    }

  }

  //shows myObject to user 
  res.json({
    myObject
  })

  // res.json({
  //   woops_i_has_forgot_to_document_all_my_endpoints: true, // CHANGE ME ;)
  //   message: "Welcome to my personal api! Here's what you need to know!",
  //   documentation_url: "https://github.com/example-username/express_self_api/README.md", // CHANGE ME
  //   base_url: "http://YOUR-APP-NAME.herokuapp.com", // CHANGE ME
  //   endpoints: [
  //     {method: "GET", path: "/api", description: "Describes all available endpoints"},
  //     {method: "GET", path: "/api/profile", description: "Data about me"}, // CHANGE ME
  //     {method: "POST", path: "/api/campsites", description: "E.g. Create a new campsite"} // CHANGE ME
  //   ]
  // })
});

//GET

//gets all the chats and shows them to the user
app.get('/api/bla', function(req, res){
  db.chat.find(function(err, chats){
    if(err){ return console.log("index error: " + err); };
    res.json(chats);
  });
});

//get a book to the user by the id
app.get('/api/chats/:id', function(req, res){
  db.chat.findById( req.params.id , function(err, data){
    
    res.json(data);

  });
});

//POST

// app.post('/api.chats', function(req, res){
//   var newChat = new db.chat(req.body);
//   newChat.save
// })

//thid is a defult thing s it the user dose not get confused
app.get('/*', function api_index(req, res) {
  // TODO: Document all your api endpoints below

  res.json(
    "this page is not defind"
  )
});


/**********
 * SERVER *
 **********/

// listen on port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is up and running on http://localhost:3000/');
});
