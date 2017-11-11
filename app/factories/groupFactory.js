angular.module('GroupsModule')
	.factory('GroupFactory', ['$http', 'OAuth', 'config', function ($http, OAuth, config) {
		return {
			getGroups: function (callback) {
				$http({
					method: 'GET',
					url: config.apiUrl + "api/groups"
				}).then(function successCallback(response) {
					callback(response.data);
				}, function errorCallback(response) {
					console.log(response);
				});
			},
			getGroup: function (id, callback) {
				$http({
					method: 'GET',
					url: config.apiUrl + "api/groups/" + id
				}).then(function successCallback(response) {
					callback(response.data);
				}, function errorCallback(response) {
					console.log(response);
				});
			},
			getCreateFormData: function (callback) {
				$http({
					method: 'GET',
					url: config.apiUrl + "api/groups/create"
				}).then(function successCallback(response) {
					callback(response.data);
				}, function errorCallback(response) {
					console.log(response);
				});
			},
			storeGroup: function (data, callback) {
				$http({
					method: 'POST',
					url: config.apiUrl + "api/groups",
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
					url: config.apiUrl + "api/groups/" + id + "/edit"
				}).then(function successCallback(response) {
					callback(response.data);
				}, function errorCallback(response) {
					console.log(response);
				});
			},
			updateGroup: function (id, data, callback) {
				$http({
					method: 'PUT',
					url: config.apiUrl + "api/groups/" + id,
					data: data
				}).then(function successCallback(response) {
					callback(response.data);
				}, function errorCallback(response) {
					console.log(response);
				});
			},
			deleteGroup: function (id, callback) {
				$http({
					method: 'DELETE',
					url: config.apiUrl + "api/groups/" + id
				}).then(function successCallback(response) {
					callback(response.data);
				}, function errorCallback(response) {
					console.log(response);
				});
			}
		};
	}]);
