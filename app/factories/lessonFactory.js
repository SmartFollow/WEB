angular.module('LessonsModule')
	.factory('LessonFactory', ['$http', 'OAuth', 'config', function ($http, OAuth, config) {
		return {
			getLesson: function (id, callback) {
				$http({
					method: 'GET',
					url: config.apiUrl + "api/lessons/" + id
				}).then(function successCallback(response) {
					callback(response.data);
				}, function errorCallback(response) {
					console.log(response);
				});
			},
		};
	}]);
