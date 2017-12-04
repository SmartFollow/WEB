angular.module('ExamsModule')
	.factory('ExamFactory', ['$http', 'OAuth', 'config', function ($http, OAuth, config) {
		return {
			storeExam: function (lessonId, data, callback) {
				$http({
					method: 'POST',
					url: config.apiUrl + "api/lessons/" + lessonId + "/exam",
					data: data
				}).then(function successCallback(response) {
					callback(response.data);
				}, function errorCallback(response) {
					console.log(response);
				});
			},
			updateExam: function (examId, data, callback) {
				$http({
					method: 'PUT',
					url: config.apiUrl + "api/exams/" + examId,
					data: data
				}).then(function successCallback(response) {
					callback(response.data);
				}, function errorCallback(response) {
					console.log(response);
				});
			},
			deleteExam: function (examId, callback) {
				$http({
					method: 'DELETE',
					url: config.apiUrl + "api/exams/" + examId
				}).then(function successCallback(response) {
					callback(response.data);
				}, function errorCallback(response) {
					console.log(response);
				});
			}
		};
	}]);
