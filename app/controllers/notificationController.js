angular.module('NotificationsModule')
	.controller('NotificationController@index', ['$scope', '$state', '$rootScope','NotificationFactory', function ($scope, $state, $rootScope, NotificationFactory) {
		$rootScope.pageTitle = "Notifications";

		NotificationFactory.getUnreadNotifications(function (notifications) {
			$scope.notifications = notifications.notifications;

			$scope.selfNotifications = notifications.self_notifications;
			$scope.selfNotifications.forEach(notification => notification.updated_at = notification.updated_at ? new Date(notification.updated_at.replace('/-/g',"/")) : null);
		});

		$scope.markNotificationAsRead = function markNotificationAsRead(notification) {
			NotificationFactory.markAsRead(notification.id, function () {
				$scope.selfNotifications = $scope.selfNotifications.filter(n => n.id != notification.id);
			});
		};
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
	.controller('NotificationController@edit', ['$scope', '$state', '$rootScope','NotificationFactory', 'UserFactory', 'GroupFactory', 'StudentClassFactory', '$timeout', '$stateParams', function ($scope, $state, $rootScope, NotificationFactory, UserFactory, GroupFactory, StudentClassFactory, $timeout, $stateParams) {
		$rootScope.pageTitle = "Editer une notification";
		$scope.alerts = {
			success: {},
			danger: {}
		};

		NotificationFactory.getNotification($stateParams.id, function (notification) {
			$scope.resource_link = notification.resource_link;
			$scope.message = notification.message;
		});

		$scope.updateNotification = function () {
			NotificationFactory.updateNotification ($stateParams.id, {
				resource_link: $scope.resource_link,
				message: $scope.message,
			}, function (notification) {
				$scope.alerts.success = {
					show: true,
					text: "Votre notification a bien été modifié, vous allez être redirigé vers sa page."
				};

				$timeout(function () {
					$state.go('notifications.show', { id: notification.id });
				}, 3000);
			});
		}
	}])
	.controller('NotificationController@create', ['$scope', '$state', '$rootScope','NotificationFactory', 'UserFactory', 'GroupFactory', 'StudentClassFactory', '$timeout', function ($scope, $state, $rootScope, NotificationFactory, UserFactory, GroupFactory, StudentClassFactory, $timeout) {
		$rootScope.pageTitle = "Créer une notification";
		$scope.alerts = {
			success: {},
			danger: {}
		};

		UserFactory.getUsers(function (users) {
			$scope.users = users;
		});

		GroupFactory.getGroups(function (groups) {
			$scope.groups = groups;
		});

		StudentClassFactory.getStudentClasses(function (classes) {
			$scope.classes = classes;
		});

		$scope.loadUsers = function($query) {
			var users = $scope.users;
			return users.filter(function(user) {
				return user.email.toLowerCase().indexOf($query.toLowerCase()) != -1;
			});
		};

		$scope.loadGroups = function($query) {
			var groups = $scope.groups;
			return groups.filter(function(group) {
				return group.name.toLowerCase().indexOf($query.toLowerCase()) != -1;
			});
		};

		$scope.loadClasses = function($query) {
			var classes = $scope.classes;
			return classes.filter(function(classe) {
				return classe.name.toLowerCase().indexOf($query.toLowerCase()) != -1;
			});
		};

		$scope.createNotification = function () {
			NotificationFactory.storeNotification ({
				resource_link: $scope.resource_link,
				message: $scope.message,
				users: $scope.usersList.map(a => a.id),
				group : $scope.groupsList ? $scope.groupsList.map(a => a.id)[0] : "",
				student_class : $scope.classesList ? $scope.classesList.map(a => a.id)[0] : ""
			}, function (notification) {
				$scope.alerts.success = {
					show: true,
					text: "Votre notification a bien été enregistré, vous allez être redirigé vers sa page."
				};

				$timeout(function () {
					$state.go('notifications.show', { id: notification.id });
				}, 3000);
			});
		}
	}])
	.controller('NotificationController@delete', ['$rootScope', '$scope', '$state', '$stateParams', 'NotificationFactory', function ($rootScope, $scope, $state, $stateParams, NotificationFactory) {
		NotificationFactory.deleteNotification($stateParams.id, function () {
			$state.go('notifications.index');
		});
	}]);
