angular.module('app')
	.controller('MenuController', ['$rootScope', '$scope', '$state', 'config', 'NotificationFactory', function ($rootScope, $scope, $state, config, NotificationFactory) {
		NotificationFactory.getUnreadNotifications(function (notifications) {
			$scope.notifications = notifications;
			$scope.notifications.forEach(notification => notification.updated_at = notification.updated_at ? new Date(notification.updated_at.replace('/-/g',"/")) : null);
		});

		$scope.markNotificationAsRead = function markNotificationAsRead(notification) {
			NotificationFactory.markAsRead(notification.id, function () {
				$scope.notifications = $scope.notifications.filter(n => n.id != notification.id);
			});
		};
	}]);
