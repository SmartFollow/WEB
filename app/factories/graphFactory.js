angular.module('GraphsModule')
	.factory('GraphFactory', ['$http', 'OAuth', 'config', function ($http, OAuth, config) {
		return {
			getGraphs: function (callback) {
				$http({
					method: 'GET',
					url: config.apiUrl + "api/graphs"
				}).then(function successCallback(response) {
					callback(response.data);
				}, function errorCallback(response) {
					console.log(response);
				});
			},
			getGraph: function (id, callback) {
				$http({
					method: 'GET',
					url: config.apiUrl + "api/graphs/" + id
				}).then(function successCallback(response) {
					callback(response.data);
				}, function errorCallback(response) {
					console.log(response);
				});
			},
			getCreateFormData: function (callback) {
				$http({
					method: 'GET',
					url: config.apiUrl + "api/graphs/create"
				}).then(function successCallback(response) {
					callback(response.data);
				}, function errorCallback(response) {
					console.log(response);
				});
			},
			storeGraph: function (data, callback) {
				$http({
					method: 'POST',
					url: config.apiUrl + "api/graphs",
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
					url: config.apiUrl + "api/graphs/" + id + "/edit"
				}).then(function successCallback(response) {
					callback(response.data);
				}, function errorCallback(response) {
					console.log(response);
				});
			},
			updateGraph: function (id, data, callback) {
				$http({
					method: 'PUT',
					url: config.apiUrl + "api/graphs/" + id,
					data: data
				}).then(function successCallback(response) {
					callback(response.data);
				}, function errorCallback(response) {
					console.log(response);
				});
			},
			deleteGraph: function (id, callback) {
				$http({
					method: 'DELETE',
					url: config.apiUrl + "api/graphs/" + id
				}).then(function successCallback(response) {
					callback(response.data);
				}, function errorCallback(response) {
					console.log(response);
				});
			}
		};
	}]);
