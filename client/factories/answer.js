console.log("Answer Factory");
app.factory('answerFactory', ['$http', function($http){
    var factory = {};

    factory.create = function(newAnswer, callback){
        $http.post("/answers", newAnswer).then(function(returned_data){
            console.log(returned_data);
            if(typeof(callback) == 'function'){
                callback(returned_data.data);
            }
        });
    }

    factory.update = function(id, callback){
        console.log(id);
        $http.put("/answers/"+id).then(function(data){
            console.log(data);
            answer = data.data;
            callback(answer);
        });
    }

    return factory;
}]);