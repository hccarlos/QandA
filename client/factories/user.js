app.factory('userFactory', function($http){
	var logged_user;
	var factory = {};
	factory.create = function(newUserName, callback){
		var newUser = {name: newUserName};
		$http.post("/users", newUser).then(function(data){
			if(data.data.errors){
				callback(data);	
			}
			else{
				logged_user = data.data;
				callback(data);	
			}
		})
	}

	factory.getUser = function(callback){
		callback(logged_user);
	}

	factory.logout = function(callback){
		console.log("function runs2");
		logged_user = null;
		callback()
	}	

	return factory;
})
