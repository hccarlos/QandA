console.log("question model");
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var QuestionSchema = new Schema({
	title: {
		type: String,
		required: [true, "Title required"],
		minlength: 10
	},
	description: {
		type: String
	},	
	// question has many answers
	_answers: [{
		type: Schema.Types.ObjectId,
		ref: 'Answer'
	}]
}, {timestamps: true});

mongoose.model("Question", QuestionSchema); // Setter, connecting schema to model handle