angular.module('NotificationsModule')
	.factory('NotificationFactory', ['$http', 'OAuth', 'config', function ($http, OAuth, config) {
		return {
			getSetNotifications: function (callback) {
				$http({
					method: 'GET',
					url: config.apiUrl + "api/notifications"
				}).then(function successCallback(response) {
					callback(response.data);
				}, function errorCallback(response) {
					console.log(response);
				});
			},
			getNotifications: function (callback) {
				$http({
					method: 'GET',
					url: config.apiUrl + "api/notifications"
				}).then(function successCallback(response) {
					callback(response.data);
				}, function errorCallback(response) {
					console.log(response);
				});
			},
			getCreateNotifications: function (callback) {
				$http({
					method: 'GET',
					url: config.apiUrl + "api/notifications/create"
				}).then(function successCallback(response) {
					callback(response.data);
				}, function errorCallback(response) {
					console.log(response);
				});
			},
			getNotification: function (id, callback) {
				$http({
					method: 'GET',
					url: config.apiUrl + "api/notifications/"+ id
				}).then(function successCallback(response) {
					callback(response.data);
				}, function errorCallback(response) {
					console.log(response);
				});
			},
			storeNotification: function (data, callback) {
				$http({
					method: 'POST',
					url: config.apiUrl + "api/notifications",
					data: data
				}).then(function successCallback(response) {
					callback(response.data);
				}, function errorCallback(response) {
					console.log(response);
				});
			},
			updateNotification: function (id, data, callback) {
				$http({
					method: 'PUT',
					url: config.apiUrl + "api/notifications" + id,
					data: data
				}).then(function successCallback(response) {
					callback(response.data);
				}, function errorCallback(response) {
					console.log(response);
				});
			},
			deleteNotification: function (id, callback) {
				$http({
					method: 'DELETE',
					url: config.apiUrl + "api/notifications/" + id
				}).then(function successCallback(response) {
					callback(response.data);
				}, function errorCallback(response) {
					console.log(response);
				});
			}
		};
	}]);
