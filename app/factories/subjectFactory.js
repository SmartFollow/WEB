angular.module('SubjectsModule')
	.factory('SubjectFactory', ['$http', 'OAuth', 'config', function ($http, OAuth, config) {
		return {
			getSubjects: function(callback) {
				$http({
					method: 'GET',
					url: config.apiUrl + "api/subjects"
				}).then(function successCallback(response) {
					callback(response.data);
				}, function errorCallback(response) {
					console.log(response);
				});
			},
			getSubject: function(id, callback) {
				$http({
					method: 'GET',
					url: config.apiUrl + "api/subjects/" + id
				}).then(function successCallback(response) {
					callback(response.data);
				}, function errorCallback(response) {
					console.log(response);
				});
			},
			getCreateSubject: function(callback) {
				$http({
					method: 'GET',
					url: config.apiUrl + "api/subjects/create"
				}).then(function successCallback(response) {
					callback(response.data);
				}, function errorCallback(response) {
					console.log(response);
				});
			},
			createSubject: function(data, callback) {
				$http({
					method: 'POST',
					url: config.apiUrl + "api/subjects",
					data: data
				}).then(function successCallback(response) {
					callback(response.data);
				}, function errorCallback(response) {
					console.log(response);
				});
			},
			updateSubject: function(id, data, callback) {
				$http({
					method: 'PUT',
					url: config.apiUrl + "api/subjects/" + id,
					data: data
				}).then(function successCallback(response) {
					callback(response.data);
				}, function errorCallback(response) {
					console.log(response);
				});
			},
			deleteSubject: function(id, callback) {
				$http({
					method: 'DELETE',
					url: config.apiUrl + "api/subjects/" + id
				}).then(function successCallback(response) {
					callback(response.data);
				}, function errorCallback(response) {
					console.log(response);
				});
			}
		};
	}]);