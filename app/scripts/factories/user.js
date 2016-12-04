angular.module('user', [])
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
.factory('users', ['user', '$http', 'OAuthToken', '$cookies',
	function(user, $http, OAuthToken, $cookies){
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
		    getUserFromData: function (callback) {
		        return getUserFromData(callback);
		    }

		};

		return service;

		function getUsers(data) {
			
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
			var tmpUsers = [];
			angular.forEach(data, function(u, key) {
				tmpUsers.push(user.setUser(u));
			});
			_users = tmpUsers;
			//this.users = user.setUser(data);
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

		function getUserFromData(callback)
		{
			$http.get("/app/js_tmp/users.json").success(function (data) {
				getUsers(data);
				callback(getUserByEmail($cookies.get('username')));
			});
		}
	}
])