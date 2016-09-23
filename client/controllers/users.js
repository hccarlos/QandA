app.controller('usersController', ['$scope','userFactory', '$location', function($scope, userFactory, $location) {    

    $scope.create = function(){
        var newUserName = $scope.name;
        userFactory.create(newUserName, function(data){
            console.log("user added in backend");
            console.log(data);
            if(data.data.errors){
                $scope.error = data.data.message;
            }
            else{
                $location.url("/");
            }
        });

    };
    userFactory.getUser(function(data){
        $scope.logged_user = data;
        // console.log($scope.logged_user);
    });


}]);