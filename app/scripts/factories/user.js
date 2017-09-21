/*
** Factory Users and User
*/

angular.module('user', ['constants'])
.factory('user', function() {
	var service = {
        setUser: function (data) {
            return new setUser(data);
        },
        setAccessRules: function (data) {
        	return new setAccessRules(data);
        }
    };

    return service;

    function setUser(data) {
        if(data) {
            this.id = data.id;
            this.email = data.email;
            this.firstname = data.firstname;                   
            this.lastname = data.lastname;
            this.class_id = data.class_id;
    		this.group_id = data.group_id;
        }

        this.getFirstName = function () {
            return this.first_name || null;
        }
    }

    function setAccessRules(data) {
        if(data) {
        	this.access_rules = data;
        }
    }
})
.factory('users', ['user', '$http', 'OAuthToken', '$cookies', 'config',
	function(user, $http, OAuthToken, $cookies, config){
		var _users;
		var _user;
		var _rules;
		
		var service = {
		    getUsers: function (data) {
		        return new getUsers(data);
		    },
		    getUserById: function (id) {
		        return getUserById(id);
		    },
		   	getUserByEmail: function (email) {
		        return getUserByEmail(email);
		    },
		    getUsersFromData: function (callback) {
		        return getUsersFromData(callback);
		    },
		    getUserFromData: function (callback) {
		        return getUserFromData(callback);
		    },
		   	getNewUserFromData: function (callback) {
		        return getNewUserFromData(callback);
		    },
		    getUserAccessRules: function (callback) {
		    	return getUserAccessRules(callback);
		    }
		};

		return service;

		function getUsers(data) {
			var tmpUsers = [];
			angular.forEach(data, function(u, key) {
				tmpUsers.push(user.setUser(u));
			});
			_users = tmpUsers;
		}

		function getUserById(id)
		{
			var tmpUser = null;
			angular.forEach(_users, function(u, key) {
				if (u.id == id)
					tmpUser = u;
			});
			return tmpUser;
		}

		function getUserByEmail(email)
		{
			var tmpUser = null;
			angular.forEach(_users, function(u, key) {
				if (u.email == email)
					tmpUser = u;
			});
			return tmpUser;
		}

		function getUsersFromData(callback)
		{
			$http.get(config.apiUrl + "api/users").success(function (data) {
					getUsers(data);
					callback(data);
			});
		}

		function getUserFromData(callback)
		{
			if (_user)
				callback(_user);
			else
			{
				$http({
					method: 'GET',
					url: config.apiUrl + "api/users/profile"
				}).then(function successCallback(response) {
					_user = response.data;
					callback(_user);
				}, function errorCallback(response) {
					console.log(response);
				});
			}
		}

		function getNewUserFromData(callback)
		{
			$http({
				method: 'GET',
				url: config.apiUrl + "api/users/profile"
			}).then(function successCallback(response) {
				_user = response.data;
				callback(_user);
			}, function errorCallback(response) {
				console.log(response);
			});
		}

		function getUserAccessRules(callback)
		{
			if (_rules)
				callback(_rules);
			else
			{
				$http({
					method: 'GET',
					url: config.apiUrl + "api/users/profile/access-rules"
				}).then(function successCallback(response) {
					_rules = response.data;
					callback(_rules);
				}, function errorCallback(response) {
					console.log(response);
				});
			}
		}
	}
])

// smartfollow.api
/*$http({
	method: 'GET',
	url: 'http://api.dev.smartfollow.org/api/users/',
	headers: {
		'Authorization': 'Bearer ' + OAuthToken.getAccessToken()
	},
	}).then(function successCallback(response) {
		this.users = response;
	}, function errorCallback(response) {
		this.users = response;
});*/	