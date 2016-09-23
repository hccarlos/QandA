app.controller('questionsController', ['$scope','userFactory', 'questionFactory', 'answerFactory', '$location', '$routeParams', function($scope, userFactory, questionFactory, answerFactory, $location, $routeParams) {    

    $scope.questions = [];
    $scope.logged_user;
    $scope.question;

    $scope.index = function(){
        questionFactory.index(function(returnedQuestions){
            $scope.questions = returnedQuestions;
        });
    };

    $scope.create = function(){
        var newQuestion = {
            title: $scope.title,
            description: $scope.description
        };
        questionFactory.create(newQuestion, function(data){
            // console.log("question added in backend");
            // console.log(data);
            if(data.errors){
                $scope.error = data.message;
            }
            else{
                $location.url("/");
            }
        });

    };

    $scope.show = function(){
        // console.log("this runs" + $routeParams.question_id);
        questionFactory.show($routeParams.question_id, function(returnedQuestion){
            // console.log("show data");
            // console.log(returnedQuestion);
            $scope.question = returnedQuestion;
        });
    };
    $scope.show();

    $scope.like = function(answerId){
        answerFactory.update(answerId, function(returnedQuestion){
            console.log("answer liked!");
            $scope.show();
        });
    };


    userFactory.getUser(function(data){
        $scope.logged_user = data;
        // console.log($scope.logged_user);
    });
    
    $scope.index();



}]);