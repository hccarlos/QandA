console.log("entering questions controller");
var mongoose = require("mongoose");
var Question = mongoose.model("Question"); // getter

module.exports = {
    index: function(req, res) {
        console.log("index method in questions");
        Question.find({}, function(err, questions) {
            if (err) {
                res.json(err);
            } else {
                res.json(questions);
            }
        });
    },
    create: function(req, res) {
        console.log("create method in questions");
        console.log(req.body)
        var newQuestion = new Question(
        	{
                title: req.body.title,
                description: req.body.description
            });
        newQuestion.save(function(err, data) {
            if (err) {
                res.json(err);
            } else {
                res.json(data);
            }
        });
    },
    show: function(req, res) {
        console.log("show method in questions");
        console.log(req.params.question_id);
        Question.findOne({ _id: req.params.question_id })
        .populate({path: "_answers",
            // get author names next
            populate: { path: "_author"}
        })
        .exec(function(err, question) {
            if (err) {
                console.log(err);
                res.json(question); // could not find question
            } else {
                console.log(question);
                res.json(question);
            }
        });
    }    
}