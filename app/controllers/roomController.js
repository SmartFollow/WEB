angular.module('RoomsModule')
	.controller('RoomController@index', ['$rootScope', '$scope', '$state', 'RoomFactory', function ($rootScope, $scope, $state, RoomFactory) {
		$rootScope.pageTitle = "Liste des salles";

		RoomFactory.getRooms(function (rooms) {
			$scope.rooms = rooms;
		});
	}])
	.controller('RoomController@create', ['$rootScope', '$scope', '$state', '$timeout', 'RoomFactory', function ($rootScope, $scope, $state, $timeout, RoomFactory) {
		$rootScope.pageTitle = "Ajouter une salle";
		$scope.alerts = {
			success: {},
			danger: {}
		};

		$scope.createRoom = function () {
			var identifier = $('input[name="identifier"]').val();
			var seats = $('input[name="seats"]').val();

			RoomFactory.storeRoom({
				identifier: identifier,
				seats: seats,
			}, function (room) {
				$scope.alerts.success = {
					show: true,
					text: "Votre salle a bien été enregistreé, vous allez être redirigé vers la liste des salles."
				};

				$timeout(function () {
					$state.go('rooms.index');
				}, 3000);
			});
		}
	}])
	.controller('RoomController@edit', ['$rootScope', '$scope', '$state', '$stateParams', '$timeout', 'RoomFactory', function ($rootScope, $scope, $state, $stateParams, $timeout, RoomFactory) {
		$rootScope.pageTitle = "Modification d'une salle";
		$scope.alerts = {
			success: {},
			danger: {}
		};

		RoomFactory.getEditFormData($stateParams.id, function (room) {
			$scope.room = room;

			$rootScope.pageTitle = "Modification d'une salle : " + $scope.room.identifier;
		});

		$scope.editRoom = function () {
			var identifier = $('input[name="identifier"]').val();
			var seats = $('input[name="seats"]').val();

			RoomFactory.updateRoom($stateParams.id, {
				identifier: identifier,
				seats: seats
			}, function (room) {
				$scope.alerts.success = {
					show: true,
					text: "Votre salle a bien été modifiée, vous allez être redirigé vers sa page."
				};

				$timeout(function () {
					$state.go('rooms.index');
				}, 3000);
			});
		}
	}])
	.controller('RoomController@delete', ['$rootScope', '$scope', '$state', '$stateParams', 'RoomFactory', function ($rootScope, $scope, $state, $stateParams, RoomFactory) {
		if (confirm('Êtes-vous sûr de vouloir supprimer la salle ?'))
		{
			RoomFactory.deleteRoom($stateParams.id, function () {
				$state.go('rooms.index');
			});
		}
		else {
			$state.go('rooms.index')
		}
	}]);
