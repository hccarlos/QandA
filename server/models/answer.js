console.log("answer model");
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var AnswerSchema = new Schema({
	text: {
		type: String,
		required: [true, "Answer text required"],
		minlength: 5
	},
	details: {
		type: String
	},
	likes: {
		type: Number
	},
	// answer has one author
	_author: {
		type: Schema.Types.ObjectId,
		ref: 'User'
	},
	// answer has one parent question
	_question: {
		type: Schema.Types.ObjectId,
		ref: 'Question'
	}
}, {timestamps: true});

mongoose.model("Answer", AnswerSchema); // Setter, connecting schema to model handle