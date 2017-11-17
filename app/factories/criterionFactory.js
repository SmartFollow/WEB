angular.module('CriteriaModule')
	.factory('CriterionFactory', ['$http', 'OAuth', 'config', function ($http, OAuth, config) {
		return {
			getCriteria: function (callback) {
				$http({
					method: 'GET',
					url: config.apiUrl + "api/criteria"
				}).then(function successCallback(response) {
					callback(response.data);
				}, function errorCallback(response) {
					console.log(response);
				});
			},
			getCriterion: function (id, callback) {
				$http({
					method: 'GET',
					url: config.apiUrl + "api/criteria/" + id
				}).then(function successCallback(response) {
					callback(response.data);
				}, function errorCallback(response) {
					console.log(response);
				});
			},
			getCreateFormData: function (callback) {
				$http({
					method: 'GET',
					url: config.apiUrl + "api/criteria/create"
				}).then(function successCallback(response) {
					callback(response.data);
				}, function errorCallback(response) {
					console.log(response);
				});
			},
			storeCriterion: function (data, callback) {
				$http({
					method: 'POST',
					url: config.apiUrl + "api/criteria",
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
					url: config.apiUrl + "api/criteria/" + id + "/edit"
				}).then(function successCallback(response) {
					callback(response.data);
				}, function errorCallback(response) {
					console.log(response);
				});
			},
			updateCriterion: function (id, data, callback) {
				$http({
					method: 'PUT',
					url: config.apiUrl + "api/criteria/" + id,
					data: data
				}).then(function successCallback(response) {
					callback(response.data);
				}, function errorCallback(response) {
					console.log(response);
				});
			},
			deleteCriterion: function (id, callback) {
				$http({
					method: 'DELETE',
					url: config.apiUrl + "api/criteria/" + id
				}).then(function successCallback(response) {
					callback(response.data);
				}, function errorCallback(response) {
					console.log(response);
				});
			}
		};
	}]);
