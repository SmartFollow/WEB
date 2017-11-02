angular.module('GroupsModule')
	.factory('GroupFactory', ['$http', 'OAuth', 'config', function ($http, OAuth, config) {
		return {
			getGroups: function (callback) {
				$http({
					method: 'GET',
					url: config.apiUrl + "api/groups"
				}).then(function successCallback(response) {
					callback(response.data);
				}, function errorCallback(response) {
					console.log(response);
				});
			}
		};
	}]);
