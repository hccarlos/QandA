app.controller('answersController', ['$scope','userFactory', 'questionFactory', 'answerFactory', '$location', '$routeParams', function($scope, userFactory, questionFactory, answerFactory, $location, $routeParams) {
    $scope.logged_user;

    $scope.create = function(){
        console.log($scope.logged_user);
        var newAnswer = {
            text: $scope.text,
            details: $scope.details,
            author: $scope.logged_user._id,
            questionId: $routeParams.question_id
        };
        answerFactory.create(newAnswer, function(data){
            if(data.errors){
                $scope.error = data.message;
            }
            else{
                $location.url("/");
            }
        });

    };
    // get logged in user
    userFactory.getUser(function(data){
        $scope.logged_user = data;
        console.log($scope.logged_user);
    });    

}]);