console.log("mongo connection, mongoose setup");

var mongoose = require('mongoose');
// require file-system so that we can load, read, require all of the model files
var fs = require('fs');

// regular expression that checks for .js extension
var reg = new RegExp(".js$", "i");

// dir where our models are located
var models_path = __dirname + "/../models";

var dbURI = 'mongodb://localhost/meanDB';
mongoose.connect(dbURI);

// Connection events

// on successful connection:
mongoose.connection.on("connected", function(){
	console.log("Mongoose default connection open to " + dbURI);
});
// if the connection throws an error
mongoose.connection.on("error", function(err){
	console.error("Mongoose default connection error: " + err);
});
// if there is a disconnection
mongoose.connection.on("disconnected", function(){
	console.log("Mongoose default connection disconnected");
});

// If the node process ends, close the Mongoose connection
process.on("SIGINT", function(){
	mongoose.connection.close(function(){
		console.log("Mongoose default connection disconnected through app termination");
		process.exit(0);
	});
});

// read all the files in the model directory and check if it is a javascript file before requiring it.

fs.readdirSync(models_path).forEach(function(file){
	if(file.indexOf('.js') > 0) {
		require(models_path + '/' + file);
	}
})
// another way using the regular expression
// fs.readdirSync( models_path ).forEach( function( file ) {
//   if( reg.test( file ) ) {
//     require( path.join( models_path, file ) );
//   }
// });