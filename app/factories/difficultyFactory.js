angular.module('DifficultiesModule')
	.factory('DifficultyFactory', ['$http', 'OAuth', 'config', function ($http, OAuth, config) {
		return {
			getDifficulties: function (callback) {
				$http({
					method: 'GET',
					url: config.apiUrl + "api/difficulties"
				}).then(function successCallback(response) {
					callback(response.data);
				}, function errorCallback(response) {
					console.log(response);
				});
			},
		};
	}]);
