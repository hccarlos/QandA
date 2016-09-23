console.log("users controller");
var mongoose = require("mongoose");
var User = mongoose.model("User"); // getter

module.exports = {
	create: function(req, res){
		var newUser = new User({
			name: req.body.name,
		})
		console.log(req.body);
		console.log(newUser);
		newUser.save(function(err, user){
			if(err){
				console.log("error looks like this: " + err);
				res.json(err);
			}
			else{
				console.log("new user created: " + user); // user returns {name:, _id, _orders...}
				res.json(user);
			}
		});
	}
}