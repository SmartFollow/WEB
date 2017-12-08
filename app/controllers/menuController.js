angular.module('app')
	.controller('MenuController', ['$rootScope', '$scope', '$state', 'config', 'NotificationFactory', function ($rootScope, $scope, $state, config, NotificationFactory) {
		$rootScope.globalAlerts = new Array();

		NotificationFactory.getUnreadNotifications(function (notifications) {
			$scope.menuNotifications = notifications.self_notifications;
			$scope.menuNotifications.forEach(notification => notification.updated_at = notification.updated_at ? new Date(notification.updated_at.replace('/-/g',"/")) : null);
		});

		$scope.markMenuNotificationAsRead = function markNotificationAsRead(notification) {
			NotificationFactory.markAsRead(notification.id, function () {
				$scope.menuNotifications = $scope.menuNotifications.filter(n => n.id != notification.id);
			});
		};
	}]);
