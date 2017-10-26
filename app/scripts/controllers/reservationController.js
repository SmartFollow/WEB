angular.module('app')
	.controller('ReservationController', ['$scope', '$state', '$rootScope', '$http', '$filter', 'config', '$timeout', function ($scope, $state, $rootScope, $http, $filter, config, $timeout) {
		$scope.button = "Créer";
		$(".edit").hide();
		if ($state.current.data != null)
			$rootScope.pageTitle = $state.current.data.pageTitle;
		$http({
			method: 'GET',
			url: config.apiUrl + "api/reservations/create"
		}).then(function successCallback(response) {
			$scope.reservations = response.data;
			console.log(response);
		}, function errorCallback(response) {
			console.log(response);
		});
		$scope.create = function () {
			console.log($filter('date')($scope.data.date1, 'yyyy-MM-dd'));
			console.log($filter('date')($scope.data.date1, 'HH:mm'));
			console.log($filter('date')($scope.data.date2, 'yyyy-MM-dd'));
			console.log($filter('date')($scope.data.date2, 'HH:mm'));
			var room = $('#room_id').val();
			var day = $('#day').val() != "" ? $('#day').val() : $filter('date')($scope.data.date1, 'EEEE').toUpperCase();
			console.log(day);
			var reservation = {
				room_id: room,
				time_start: $filter('date')($scope.data.date1, 'HH:mm'),
				time_end: $filter('date')($scope.data.date2, 'HH:mm'),
				date_start: $filter('date')($scope.data.date1, 'yyyy-MM-dd'),
				date_end: $filter('date')($scope.data.date2, 'yyyy-MM-dd'),
				day: day
			};
			$http({
				method: 'POST',
				url: config.apiUrl + "api/reservations",
				data: reservation
			}).then(function successCallback(response) {
				console.log(response);
				if (response.data.error) {
					if (response.data.error == "reservations.conflict")
						$(".alert-danger").html("<strong>Erreur !</strong> La salle que vous essayez de réserver l'est déjà à cette horaire.");
					$(".alert-danger").show();
					return;
				}
				$(".alert-success").show();
				$timeout(function () {
					$state.go('planning');
				}, 3000);
			}, function errorCallback(response) {
				$(".alert-danger").show();
				console.log(response);
			});
		};
	}])
	.controller('reservationsEdit', ['$scope', '$state', '$rootScope', '$http', '$filter', '$stateParams', 'config', '$timeout', function ($scope, $state, $rootScope, $http, $filter, $stateParams, config, $timeout) {
		$scope.button = "Editer";
		$(".delete").show();
		if ($state.current.data != null)
			$rootScope.pageTitle = $state.current.data.pageTitle;
		$http({
			method: 'GET',
			url: config.apiUrl + "api/reservations/create"
		}).then(function successCallback(response) {
			$scope.reservations = response.data;
			console.log(response);
		}, function errorCallback(response) {
			console.log(response);
		});
		$http({
			method: 'GET',
			url: config.apiUrl + "api/reservations/" + $stateParams.id
		}).then(function successCallback(response) {
			$scope.reservation = response.data;
			$("#day").val(response.data.day);
			$scope.data = {
				date1: response.data.date_start + " " + response.data.time_start,
				date2: response.data.date_end + " " + response.data.time_end
			};
			$("#date1").hide();
			$("#date2").hide();
			console.log(response);
		}, function errorCallback(response) {
			console.log(response);
		});

		$scope.editDate1 = function () {
			$("#edit1").hide();
			$("#date1").show();
		};

		$scope.editDate2 = function () {
			$("#edit2").hide();
			$("#date2").show();
		};

		$scope.create = function () {
			console.log(moment($scope.data.date1).format('YYYY-MM-DD'));
			console.log(moment($scope.data.date1).format('HH:MM'));
			console.log(moment($scope.data.date2).format('YYYY-MM-DD'));
			console.log(moment($scope.data.date2).format('HH:MM'));
			var room = $('#room_id').val();
			var day = $('#day').val() != "" ? $('#day').val() : moment($scope.data.date1).format('dddd').toUpperCase();
			console.log(day);
			var reservation = {
				room_id: room,
				time_start: moment($scope.data.date1).format('HH:MM'),
				time_end: moment($scope.data.date2).format('HH:MM'),
				date_start: moment($scope.data.date1).format('YYYY-MM-DD'),
				date_end: moment($scope.data.date2).format('YYYY-MM-DD'),
				day: day
			};
			$http({
				method: 'PUT',
				url: config.apiUrl + "api/reservations/" + $stateParams.id,
				data: reservation
			}).then(function successCallback(response) {
				$(".alert-success").show();
				$timeout(function () {
					$state.go('planning');
				}, 3000);
				console.log(response);
			}, function errorCallback(response) {
				$(".alert-danger").show();
				console.log(response);
			});
		};
	}])
	.controller('reservationsDelete', ['$scope', '$state', '$rootScope', '$http', '$filter', '$stateParams', 'config', function ($scope, $state, $rootScope, $http, $filter, $stateParams, config) {
		$http({
			method: 'DELETE',
			url: config.apiUrl + "api/reservations/" + $stateParams.id
		}).then(function successCallback(response) {
			$state.go('planning');
			console.log(response);
		}, function errorCallback(response) {
			console.log(response);
		});
	}]);
