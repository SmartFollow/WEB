angular.module('ClassesModule')
	.factory('ClassFactory', ['$http', 'OAuth', 'config', function ($http, OAuth, config) {
		return {
			getClasses: function (callback) {
				$http({
					method: 'GET',
					url: config.apiUrl + "api/student-classes"
				}).then(function successCallback(response) {
					callback(response.data);
				}, function errorCallback(response) {
					console.log(response);
				});
			}
		}
	}]);