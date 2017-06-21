/*
** Factory Users and User
*/

angular.module('user', ['constants'])
.factory('user', function() {
	var service = {
        setUser: function (data) {
            return new setUser(data);
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
})
.factory('users', ['user', '$http', 'OAuthToken', '$cookies', 'config',
	function(user, $http, OAuthToken, $cookies, config){
		var _users;
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
			$http.get(config.apiUrl + "api/users/profile").success(function (data) {
					user.setUser(data);
					callback(data);
			});
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