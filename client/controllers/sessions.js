app.controller('sessionsController', ['$scope','userFactory', '$location', function($scope, userFactory, $location) {    
    var global_user;
    console.log("controller for sessions loaded");

    $scope.logout = function(){
    	console.log("function runs");
        userFactory.logout(function(){
        	console.log("user logged out");
        	$location.url("/index");
        });
    };
    userFactory.getUser(function(data){
        global_user = data;
    });

}]);