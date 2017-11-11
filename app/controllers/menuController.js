angular.module('app')
	.controller('MenuController', ['$rootScope', '$scope', '$state', 'config', 'NotificationFactory', function ($rootScope, $scope, $state, config, NotificationFactory) {
		NotificationFactory.getSetNotifications(function (notifications) {
			$scope.notifications = notifications;
			$scope.notifications.forEach(notification => notification.updated_at = notification.updated_at ? new Date(notification.updated_at.replace('/-/g',"/")) : null);
		});
	}]);
