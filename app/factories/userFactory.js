angular.module('UsersModule')
	.factory('UserFactory', ['$http', 'OAuthToken', '$cookies', 'config',
		function ($http, OAuthToken, $cookies, config) {
			return {
				getUser: function (id, callback) {
					$http({
						method: 'GET',
						url: config.apiUrl + "api/users/" + id
					}).then(function successCallback(response) {
						callback(response.data);
					}, function errorCallback(response) {
						console.log(response);
					});
				},
				getCreateFormData: function (callback) {
					$http({
						method: 'GET',
						url: config.apiUrl + "api/users/create"
					}).then(function successCallback(response) {
						callback(response.data);
					}, function errorCallback(response) {
						console.log(response);
					});
				},
				storeUser: function (data, callback) {
					$http({
						method: 'POST',
						url: config.apiUrl + "api/users",
						data: data
					}).then(function successCallback(response) {
						callback(response.data);
					}, function errorCallback(response) {
						console.log(response);
					});
				},
				getEditFormData: function (id, callback) {
					$http({
						method: 'GET',
						url: config.apiUrl + "api/users/" + id + "/edit"
					}).then(function successCallback(response) {
						callback(response.data);
					}, function errorCallback(response) {
						console.log(response);
					});
				},
				updateUser: function (id, data, callback) {
					$http({
						method: 'PUT',
						url: config.apiUrl + "api/users/" + id,
						data: data
					}).then(function successCallback(response) {
						callback(response.data);
					}, function errorCallback(response) {
						console.log(response);
					});
				},
				deleteUser: function (id, callback) {
					$http({
						method: 'DELETE',
						url: config.apiUrl + "api/users/" + id
					}).then(function successCallback(response) {
						callback(response.data);
					}, function errorCallback(response) {
						console.log(response);
					});
				},
				getUsers: function (callback) {
					$http({
						method: 'GET',
						url: config.apiUrl + "api/users"
					}).then(function successCallback(response) {
						callback(response.data);
					}, function errorCallback(response) {
						console.log(response);
					});
				},
				getProfile: function (callback) {
					$http({
						method: 'GET',
						url: config.apiUrl + "api/users/profile"
					}).then(function successCallback(response) {
						callback(response.data);
					}, function errorCallback(response) {
						console.log(response);
					});
				},
				getUserAccessRules: function (callback) {
					$http({
						method: 'GET',
						url: config.apiUrl + "api/users/profile/access-rules"
					}).then(function successCallback(response) {
						callback(response.data);
					}, function errorCallback(response) {
						console.log(response);
					});
				}
			};
		}
	]);
