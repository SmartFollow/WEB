angular.module('UsersModule')
	.factory('UserFactory', ['$http', 'OAuthToken', '$cookies', 'config',
		function ($http, OAuthToken, $cookies, config) {
			var _users;
			var _user;
			var _rules;

			var service = {
				getUserById: function (id, callback) {
					return getUserByIdFromData(id, callback);
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

			function getUsersFromData(callback) {
				$http.get(config.apiUrl + "api/users").success(function (data) {
					callback(data);
				});
			}

			function getUserByIdFromData(id, callback) {
				$http({
					method: 'GET',
					url: config.apiUrl + "api/users/" + id
				}).then(function successCallback(response) {
					_user = response.data;
					callback(_user);
				}, function errorCallback(response) {
					console.log(response);
				});
			}

			function getUserFromData(callback) {
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

			function getNewUserFromData(callback) {
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

			function getUserAccessRules(callback) {
				if (_rules)
					callback(_rules);
				else {
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
	]);
