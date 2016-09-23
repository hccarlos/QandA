console.log("routes loading");
// ########## Require all controllers in routes
// need to require all controllers
var usersController = require('../controllers/users.js');
var questionsController = require('../controllers/questions.js');
var answersController = require('../controllers/answers.js');

module.exports = function(app){

// ########## User routes

	app.post('/users', function(req, res){
		console.log("create route for users"); // create new users
		usersController.create(req, res);
	});


// ########## Question routes
	app.get('/questions', function(req, res){
		console.log("index route for questions"); // show all questions
		questionsController.index(req, res);
	});
	app.post('/questions', function(req, res){
		console.log("create route for questions"); // create new question
		questionsController.create(req, res);
	});
	app.get('/questions/:question_id', function(req, res){
		console.log("show route for one question"); // show one question
		questionsController.show(req, res);
	});


// ########## Answer routes
	app.post('/answers', function(req, res){
		console.log("create route for answers"); // create new order
		answersController.create(req, res);
	});
	app.put("/answers/:answer_id", function(req, res){
		console.log("update route for answers"); // update likes
		answersController.update(req, res);
	})

}