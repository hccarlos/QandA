console.log("entering answers controller");
var mongoose = require("mongoose");
var Answer = mongoose.model("Answer"); // getter
var Question = mongoose.model("Question");

module.exports = {
    create: function(req, res) {
        console.log("create method in answers");
        console.log(req.body)
        var newAnswer = new Answer(
            {
                text: req.body.text,
                details: req.body.details,
                likes: 0,
                _author: req.body.author,
                _question: req.body.questionId
            });
        newAnswer.save(function(err, data) {
            if (err) {
                res.json(err);
            } else {
//##########################
                Question.findOne({ _id: req.body.questionId}, function(err, question) {
                    if (err) {
                        console.log(err); // could not locate the entry
                    }
                    question._answers.push(newAnswer._id);
                    question.save(function(err) {
                        if (err) {
                            console.log(err); // could not save into database
                        } else {
                            console.log("answer added to question");
                        }
                    })

                });
//##########################
                res.json(data);
            }
        });
    },
    update: function(req, res) {
        console.log("update method in backend");
        Answer.findOne({ _id: req.params.answer_id }, function(err, answer) {
            if (err) {
                res.json(err); // could not locate the entry
            }
            answer.likes += 1;
            answer.save(function(err) {
                if (err) {
                    res.json(err);
                } else {
                    res.json({ success: "post liked!" });
                }
            })

        });
    }
}    