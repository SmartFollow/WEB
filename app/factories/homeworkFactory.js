angular.module('HomeworksModule')
	.factory('HomeworkFactory', ['$http', 'OAuth', 'config', function ($http, OAuth, config) {
		return {
			storeHomework: function (lessonId, data, callback) {
				$http({
					method: 'POST',
					url: config.apiUrl + "api/lessons/" + lessonId + "/homeworks",
					data: data
				}).then(function successCallback(response) {
					callback(response.data);
				}, function errorCallback(response) {
					console.log(response);
				});
			},
			updateHomework: function (lessonId, homeworkId, data, callback) {
				$http({
					method: 'PUT',
					url: config.apiUrl + "api/lessons/" + lessonId + "/homeworks/" + homeworkId,
					data: data
				}).then(function successCallback(response) {
					callback(response.data);
				}, function errorCallback(response) {
					console.log(response);
				});
			},
			deleteHomework: function (lessonId, homeworkId, callback) {
				$http({
					method: 'DELETE',
					url: config.apiUrl + "api/lessons/" + lessonId + "/homeworks/" + homeworkId
				}).then(function successCallback(response) {
					callback(response.data);
				}, function errorCallback(response) {
					console.log(response);
				});
			}
		};
	}]);
