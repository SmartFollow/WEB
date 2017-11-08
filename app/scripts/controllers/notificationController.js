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
	}])
	.controller('NotificationController', ['$scope', '$filter', 'UserFactory', function ($scope, $filter, UserFactory) {

	// init
	$scope.sort = {
		sortingOrder: 'id',
		reverse: false
	};

	$scope.gap = 5;

	$scope.filteredItems = [];
	$scope.groupedItems = [];
	$scope.itemsPerPage = 5;
	$scope.pagedItems = [];
	$scope.currentPage = 0;
	$scope.items = [
		{"id": 1, "Type": "warning", "Message": "Notes en Mathématiques en baisse"},
		{"id": 2, "Type": "info", "Message": "M. Xavier ne pourra assurer ses cours le 12 janvier"},
		{"id": 3, "Type": "ok", "Message": "Notes en SVT entrain de remonter. Bon travail !"},
		{"id": 4, "Type": "remove", "Message": "Baisse des notes en Histoire et manque de rigueur"},
		{"id": 5, "Type": "info", "Message": "Le cours de Mathématiques du 10 janvier est déplacé en salle 104"},
		{"id": 6, "Type": "warning", "Message": "commentaire 6"},
		{"id": 7, "Type": "ok", "Message": "Notes en SVT en train de remonter. Bon travail !"},
		{"id": 8, "Type": "ok", "Message": "commentaire 9"},
		{"id": 9, "Type": "remove", "Message": "commentaire 10"},
	];
	var searchMatch = function (haystack, needle) {
		if (!needle) {
			return true;
		}
		return haystack.toLowerCase().indexOf(needle.toLowerCase()) !== -1;
	};

	// init the filtered items
	$scope.search = function () {
		$scope.filteredItems = $filter('filter')($scope.items, function (item) {
			for (var attr in item) {
				if (searchMatch(item[attr], $scope.query))
					return true;
			}
			return false;
		});
		// take care of the sorting order
		if ($scope.sort.sortingOrder !== '') {
			$scope.filteredItems = $filter('orderBy')($scope.filteredItems, $scope.sort.sortingOrder, $scope.sort.reverse);
		}
		$scope.currentPage = 0;
		// now group by pages
		$scope.groupToPages();
	};


	// calculate page in place
	$scope.groupToPages = function () {
		$scope.pagedItems = [];

		for (var i = 0; i < $scope.filteredItems.length; i++) {
			if (i % $scope.itemsPerPage === 0) {
				$scope.pagedItems[Math.floor(i / $scope.itemsPerPage)] = [$scope.filteredItems[i]];
			} else {
				$scope.pagedItems[Math.floor(i / $scope.itemsPerPage)].push($scope.filteredItems[i]);
			}
		}
	};

	$scope.range = function (size, start, end) {
		var ret = [];

		if (size < end) {
			end = size;
			start = ((size - $scope.gap) < 0) ? 0 : (size - $scope.gap);
		} else if (end % 5 != 0) {
			end = end - (end % 5);
			start = end - $scope.gap;
		}

		for (var i = start; i < end; i++) {
			ret.push(i);
		}

		return ret;

	};

	$scope.prevPage = function () {
		if ($scope.currentPage > 0) {
			$scope.currentPage--;
		}
	};

	$scope.nextPage = function () {
		if ($scope.currentPage < $scope.pagedItems.length - 1) {
			$scope.currentPage++;
		}
	};

	$scope.setPage = function (goToPage) {
		if (goToPage != undefined) {
			this.n = goToPage;
		}
		$scope.currentPage = this.n;
	};

	// functions have been describe process the data for display
	$scope.search();

}]);
