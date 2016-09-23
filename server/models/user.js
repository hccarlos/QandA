console.log("user model");
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var UserSchema = new Schema({
	name: {
		type: String,
		required: [true, "Customer Name Required"],
		trim: true,
		minlength: 2
	},
	// user has many answers
	_answers: [{
		type: Schema.Types.ObjectId,
		ref: 'Answer'
	}]
}, {timestamps: true});

mongoose.model("User", UserSchema); // Setter, connecting schema to model handle