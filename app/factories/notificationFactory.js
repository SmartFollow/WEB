angular.module('NotificationsModule')
	.factory('NotificationFactory', ['$http', 'OAuth', 'config', '$rootScope', function ($http, OAuth, config, $rootScope) {
		return {
			getNotifications: function (callback, errorCallback) {
				$http({
					method: 'GET',
					url: config.apiUrl + "api/notifications"
				}).then(function successCallback(response) {
					callback(response.data);
				}, function (response) {
					if (errorCallback)
						errorCallback(response.data);
					else
						$rootScope.globalAlerts.push({ type: 'danger', text: 'Erreur lors du traitement de votre requête' });
				});
			},
			getUnreadNotifications: function (callback, errorCallback) {
				$http({
					method: 'GET',
					url: config.apiUrl + "api/notifications?type=unread"
				}).then(function successCallback(response) {
					callback(response.data);
				}, function (response) {
					if (errorCallback)
						errorCallback(response.data);
					else
						$rootScope.globalAlerts.push({ type: 'danger', text: 'Erreur lors du traitement de votre requête' });
				});
			},
			getCreateNotifications: function (callback, errorCallback) {
				$http({
					method: 'GET',
					url: config.apiUrl + "api/notifications/create"
				}).then(function successCallback(response) {
					callback(response.data);
				}, function (response) {
					if (errorCallback)
						errorCallback(response.data);
					else
						$rootScope.globalAlerts.push({ type: 'danger', text: 'Erreur lors du traitement de votre requête' });
				});
			},
			getNotification: function (id, callback, errorCallback) {
				$http({
					method: 'GET',
					url: config.apiUrl + "api/notifications/"+ id
				}).then(function successCallback(response) {
					callback(response.data);
				}, function (response) {
					if (errorCallback)
						errorCallback(response.data);
					else
						$rootScope.globalAlerts.push({ type: 'danger', text: 'Erreur lors du traitement de votre requête' });
				});
			},
			storeNotification: function (data, callback, errorCallback) {
				$http({
					method: 'POST',
					url: config.apiUrl + "api/notifications",
					data: data
				}).then(function successCallback(response) {
					callback(response.data);
				}, function (response) {
					if (errorCallback)
						errorCallback(response.data);
					else
						$rootScope.globalAlerts.push({ type: 'danger', text: 'Erreur lors du traitement de votre requête' });
				});
			},
			updateNotification: function (id, data, callback, errorCallback) {
				$http({
					method: 'PUT',
					url: config.apiUrl + "api/notifications/" + id,
					data: data
				}).then(function successCallback(response) {
					callback(response.data);
				}, function (response) {
					if (errorCallback)
						errorCallback(response.data);
					else
						$rootScope.globalAlerts.push({ type: 'danger', text: 'Erreur lors du traitement de votre requête' });
				});
			},
			deleteNotification: function (id, callback, errorCallback) {
				$http({
					method: 'DELETE',
					url: config.apiUrl + "api/notifications/" + id
				}).then(function successCallback(response) {
					callback(response.data);
				}, function (response) {
					if (errorCallback)
						errorCallback(response.data);
					else
						$rootScope.globalAlerts.push({ type: 'danger', text: 'Erreur lors du traitement de votre requête' });
				});
			},
			markAsRead: function (id, callback, errorCallback) {
				$http({
					method: 'PUT',
					url: config.apiUrl + 'api/notifications/' + id + '/read'
				}).then(function successCallback(response) {
					callback(response.data);
				}, function (response) {
					if (errorCallback)
						errorCallback(response.data);
					else
						$rootScope.globalAlerts.push({ type: 'danger', text: 'Erreur lors du traitement de votre requête' });
				});
			}
		};
	}]);
