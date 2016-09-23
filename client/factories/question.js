console.log("Question Factory");
app.factory('questionFactory', ['$http', function($http){
    var factory = {};
    var questions = [];
    var question = [];

    factory.index = function(callback){
        $http.get("/questions").then(function(data){
            // console.log(data);
            questions = data.data;
            callback(questions);
        });
    }

    factory.create = function(newQuestion, callback){
        $http.post("/questions", newQuestion).then(function(returned_data){
            console.log(returned_data);
            if(typeof(callback) == 'function'){
                callback(returned_data.data);
            }
        });
    }

    factory.show = function(id, callback){
        console.log(id);
        $http.get("/questions/"+id).then(function(data){
            console.log(data);
            question = data.data;
            callback(question);
        });
    }

    return factory;
}]);