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

		function getUserFromData(callback)
		{
			/*$http.get("/app/js_tmp/users.json").success(function (data) {
				getUsers(data);
				callback(getUserByEmail($cookies.get('username')));
			});*/
			$http.defaults.headers.common['Authorization'] = "Bearer " + "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjNjYjRiMWZkOTYwYTkwYjUwOTQ4NzU1MmY1MDRiNzE4MDJhYzZhOWQ0Yjc0MjgyNGI4NzlkMjRhMDQ1YjQxMWQzZjExNzExYjg3OGZmYzhhIn0.eyJhdWQiOiIyIiwianRpIjoiM2NiNGIxZmQ5NjBhOTBiNTA5NDg3NTUyZjUwNGI3MTgwMmFjNmE5ZDRiNzQyODI0Yjg3OWQyNGEwNDViNDExZDNmMTE3MTFiODc4ZmZjOGEiLCJpYXQiOjE0OTI3MTA0MDcsIm5iZiI6MTQ5MjcxMDQwNywiZXhwIjoxNTI0MjQ2NDA3LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.3Wb62BeCFeOCwRB8ZhwL0x_P4BEllYT9wxWra1Ldl8xUg1XlyiQQ1V6QRrpr52FheKA4v9lDwqqJu3Ckrw13VXK3OiLBjN3nR0Q5mSFwIITdTcFgYMwOK_j1LOc8UuzMx2puRbKxH2KPZln1Cfm8SetyTZSVSg7iuHpdepoACSbLwDfQRBi4lunU2risNOhZ67HYlRIed5b9IrMLyF_4tKn55z9zyeoIQ20J6X3APgpukVe7Ofb3YD3M_6OFe1ou7tke8rAp5TXHB0o5gXKOHf4aKTe0d83mVKN_16Wi1FdAqtd1xY74XAm4Juow2mzFbp_CqW23p3FW__VFDsVCyTEEdtIl52c6rS7NFHumZZkTq-G1a8ejKSzkzr86WHB-I59Wc5UXeFPfGmFKJMXXRHlULnZazDkwqLtsYFJdffILK5tTFULxv0vtGN1CZ6KydtLQVK8TK1HzC4JQOGTDJK1gbYpJEo7FbIBsrgOSGAKEkFyqfnFOwbdUNs3eqo2ohvF6ZeyP7ewrY75fTnw4zYbjp1QdV7w5hIXavXD_mgR9ZnUcxacPI3YUSjl3oY0gFVGFh7ammtKwnIMtm6XtOcru_EovZx1oxOFdBvjVhxJZSPXzUzaDlyctMlc7xMstXTpAGDyAnmqqbUsp_6BVioXuamRlIbbqwTyR5HyZH0I";
			$http.get(config.apiUrl + "api/users").success(function (data) {
					getUsers(data);
					callback(getUserByEmail($cookies.get('username')));
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