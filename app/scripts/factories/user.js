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
			//$http.defaults.headers.common['Authorization'] = "Bearer " + "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjkxMmM1ZjIyNzk2Y2IxMTY2NjRhNGJkYjhjMjJhN2EzNjRjYzUyN2ZlNDljZmMwZjE3OTFlMDU1Nzk0Zjc1NGNmZDY1NjYxNTI0ZGIwNjdhIn0.eyJhdWQiOiIyIiwianRpIjoiOTEyYzVmMjI3OTZjYjExNjY2NGE0YmRiOGMyMmE3YTM2NGNjNTI3ZmU0OWNmYzBmMTc5MWUwNTU3OTRmNzU0Y2ZkNjU2NjE1MjRkYjA2N2EiLCJpYXQiOjE0OTI2NDQyMDgsIm5iZiI6MTQ5MjY0NDIwOCwiZXhwIjo0NjQ4MzE3ODA4LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.eHjG-m1WuixwitEtXLVU1CPnrkZtM7Fj1Tuv80HsgJAdX8ObpqgU3mtJTWQnHK4vhs1Pr6392_1myKevgChFFkIjmq5kdpd-pZIQ5B3aqe93ro8aKG0Lo_eQylihtwr6qWl1T1KEPm8XQx4amrUi5BN40_-CX65m7p2BjSDPqa-aNXiPzaIzfJ1MnDT5MT90BNnHHql0D_l2RIC4j0TncyreLKVIBoDJN07ExNhvuSEyDPzEFHQIjWCAd9BKZv7MFwmj10kZvHFHz6V60zyTDCN3xiUB-z3qtnyOYMG_Plic4KPrYAaE-Um4mC0RUlAjKY-yqtgXnUBMpkSfvcuv_w71m3xLq39hyk7obMituWFu9mXejfNdshg14A2rKccYG3Aqq5oNPBdgULWUE3Xbk_aYpTfZ5OQ-eDqTciZa0iwI-gbfS5AGF9hkSdRLDOb2mxE_0-pnmgCG4dO6X3pODdDLxnh9RLx4TUDnq0z8uobuFKOgZQk22ZjI_KL9GUesY0RSD9HhKgHPPtU1xLjf99_VfrBuS8puMqhKE-xXOeozPiHL9yIrPFI68Nn28gPwMpJJ6rY43OOD1Oj_53kdNbUja-82pUGIojzvyjSFoBix_4hIhVt2S1R31D_FWiD5iPiAwbH7lHWnmLF0SXys2D0S4d8tCQgfzWNBdAIkuwo";
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