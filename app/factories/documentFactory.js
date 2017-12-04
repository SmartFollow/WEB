angular.module('DocumentsModule')
	.factory('DocumentFactory', ['$http', 'OAuth', 'config', function ($http, OAuth, config) {
		return {
			storeDocument: function (lessonId, data, callback) {
				$http({
					method: 'POST',
					url: config.apiUrl + "api/lessons/" + lessonId + "/documents",
					data: data,
					headers: { 'Content-Type': undefined }
				}).then(function successCallback(response) {
					callback(response.data);
				}, function errorCallback(response) {
					console.log(response);
				});
			},
			updateDocument: function (homeworkId, data, callback) {
				$http({
					method: 'PUT',
					url: config.apiUrl + "api/documents/" + homeworkId,
					data: data
				}).then(function successCallback(response) {
					callback(response.data);
				}, function errorCallback(response) {
					console.log(response);
				});
			},
			deleteDocument: function (homeworkId, callback) {
				$http({
					method: 'DELETE',
					url: config.apiUrl + "api/documents/" + homeworkId
				}).then(function successCallback(response) {
					callback(response.data);
				}, function errorCallback(response) {
					console.log(response);
				});
			}
		};
	}]);
