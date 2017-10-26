angular.module('groups', ['constants'])
	.factory('GroupFactory', ['$http', '$rootScope', '$scope', 'OAuth', 'config', function ($http, $rootScope, $scope, OAuth, config) {
		return {
			getGroups: function (callback) {
				$http({
					method: 'GET',
					url: config.apiUrl + "api/groups"
				}).then(function successCallback(response) {
					callback(response);
				}, function errorCallback(response) {
					console.log(response);
				});
			}
		};
	}]);