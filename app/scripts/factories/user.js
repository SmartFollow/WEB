/*
** Factory Users and User
*/

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
			$http.defaults.headers.common['Authorization'] = "Bearer " + "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImFhZmMxZjExZmViNGI4YjAyOTYzZTFmMDg5ZDA1YTdkZDE5NTNiN2ZmNTAyMjdmNGIyNGM3ZDdiM2M0M2M4YjgxNzNlOTgxYWZiZmY0YmRjIn0.eyJhdWQiOiIyIiwianRpIjoiYWFmYzFmMTFmZWI0YjhiMDI5NjNlMWYwODlkMDVhN2RkMTk1M2I3ZmY1MDIyN2Y0YjI0YzdkN2IzYzQzYzhiODE3M2U5ODFhZmJmZjRiZGMiLCJpYXQiOjE0ODEzMTk5NDYsIm5iZiI6MTQ4MTMxOTk0NiwiZXhwIjoxNTEyODU1OTQ2LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.nq2S94LKDdeA_vdjyzzNgdkUcoOgvHApZeBAhUIxDRjxKc2muwcgash4VQh4UzpkAlUuSq7leLWy_ltmasSvGa9cHHFBKGo5MYkqCgtycZLeKTVsOaryBhQPZ2zeUBHQytGcDVhgXxc724E8OdaFKM3IlG9dVHYsgwxPeIRr895fWW3tf1GkyhNpSS4l4xgIL1lEEAqxg14Zn13JRTPl7f6B3ieQXjoyRDfVzyYXJkZe-b4DrqqVAs3rUubguNfuBDm60cf6q37EhKJXqhdqgXimeHYD9FR-24hjAuZsxwsbUVvOR5rqhThL9jiK595g9__ODewfGaUDtPH66MsICmzsREDbCGNnNO_WHuQ5G_EGzPvRmZsdUGG__c0Z1YpuxBAcxNN5zOmQKfyTXofVRbyfRlv-JpQADNhjVdYaejx42a4gBNfa_lgsGnYLVPV6hp4_iCVOrNbKDtyzfmSZlwwgSgIAf2lQ88-B5JBIqJwg3kv7ADNgslqw-jciQObeUNy_lmpcyS_2d-DmgypNMS6cfWa9RDgZG1lP2C68NIeUhcxV51BTj_hA3jSvvgSMDQAMV5SGIVnlOzs-rTSmcuMM5RXFUjb9LJVZPheU6d5lgEHBJ0R802J-CdSUYQmDFPEpE9wL1vjEGZDNdG3mgT452FMBy7ITpDilOsQzfOs";
			$http.get("http://smartfollow.api/api/users").success(function (data) {
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