angular.module('NotificationsModule')
	.factory('NotificationFactory', ['$http', 'OAuth', 'config', function ($http, OAuth, config) {
		return {
			getNotifications: function (callback) {
				$http({
					method: 'GET',
					url: config.apiUrl + "api/notifications"
				}).then(function successCallback(response) {
					callback(response.data);
				}, function errorCallback(response) {
					console.log(response);
				});
			}
		};
	}]);
