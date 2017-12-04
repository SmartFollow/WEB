angular.module('ExamsModule')
	.factory('MarkFactory', ['$http', 'OAuth', 'config', function ($http, OAuth, config) {
		return {
			storeMark: function (examId, data, callback) {
				$http({
					method: 'POST',
					url: config.apiUrl + "api/exams/" + examId + "/marks",
					data: data
				}).then(function successCallback(response) {
					callback(response.data);
				}, function errorCallback(response) {
					console.log(response);
				});
			},
			updateMark: function (examId, markId, data, callback) {
				$http({
					method: 'PUT',
					url: config.apiUrl + "api/exams/" + examId + "/marks/" + markId,
					data: data
				}).then(function successCallback(response) {
					callback(response.data);
				}, function errorCallback(response) {
					console.log(response);
				});
			}
		};
	}]);
