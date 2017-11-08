angular.module('NotificationsModule')
	.controller('NotificationController@index', ['$scope', '$state', '$rootScope','NotificationFactory', function ($scope, $state, $rootScope, NotificationFactory) {
		$rootScope.pageTitle = "Notifications";

		NotificationFactory.getNotifications(function (notifications) {
			$scope.notifications = notifications;
		});
	}])
	.controller('NotificationController@show', ['$rootScope', '$scope', '$state', '$stateParams', 'NotificationFactory', 'UserFactory', function ($rootScope, $scope, $state, $stateParams, NotificationFactory, UserFactory) {
		$rootScope.pageTitle = "Notification";

		NotificationFactory.getNotification($stateParams.id, function (notification) {
			$scope.notification = notification;
			UserFactory.getUser(notification.transmitter_id, function (user) {
				$scope.user = user;
			});
		});
	}])
	.controller('NotificationController@create', ['$scope', '$state', '$rootScope','NotificationFactory', function ($scope, $state, $rootScope, NotificationFactory) {
		$rootScope.pageTitle = "Créer une notification";
		$scope.alerts = {
			success: {},
			danger: {}
		};
	}])
	.controller('NotificationController@delete', ['$rootScope', '$scope', '$state', '$stateParams', 'NotificationFactory', function ($rootScope, $scope, $state, $stateParams, NotificationFactory) {
		NotificationFactory.deleteNotification($stateParams.id, function () {
			$state.go('notifications.index');
		});
	}]);
