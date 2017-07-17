angular.module('app').controller('planning', ['users', '$http', '$rootScope', '$scope', 'OAuth', '$state', 'config', function(users, $http, $rootScope, $scope, OAuth, $state, config) {
	if ($state.current.data != null)
		$rootScope.pageTitle = $state.current.data.pageTitle;

	var lessons;
	var reservations;

	$scope.lessons = function (start, end, timezone, callback) {
		if (lessons)
			callback(lessons);
		else {
		 $http({
				method: 'GET',
				url: config.apiUrl + "api/lessons"
			}).then(function successCallback(response) {
				console.log(response);
				events = [];
				angular.forEach( response.data, function(lesson, key) {
					if ($rootScope.user.group_id <= 2 || $rootScope.user.class_id == lesson.student_class_id)
					{
						this.push({
							id: lesson.id,
							title: lesson.description,
							start: lesson.start,
							end: lesson.end,
							url: "http://smartfollow.web/#/lessons/"+lesson.id,
							stick: true
						});
					}
				}, events);
				console.log(events);
				lessons = events;
				callback(events);
			}, function errorCallback(response) {
				console.log(response);
		});
		}
	};

	$scope.reservations = function (start, end, timezone, callback) {
		if (reservations)
			callback(reservations);
		else {
		 $http({
				method: 'GET',
				url: config.apiUrl + "api/reservations"
			}).then(function successCallback(response) {
				console.log(response);
				events = [];
				angular.forEach( response.data, function(reservation, key) {
					if ($rootScope.user.group_id <= 2)
					{
						this.push({
							id: reservation.id,
							title: reservation.room_id == 1 ? 'Reservation de la salle C302' : 'Reservation de la salle D301',
							start: reservation.date_start + " " + reservation.time_start,
							end: reservation.date_end + " " + reservation.time_end,
							url: "http://smartfollow.web/#/reservations/"+reservation.id+"/edit",
							stick: true,
							color: "#888888"
						});
					}
				}, events);
				console.log(events);
				reservations = events;
				callback(events);
			}, function errorCallback(response) {
				console.log(response);
		});
		}
	};

	$scope.uiConfig = {
      calendar:{
      	lang: 'fr',
        height: 820,
        defaultView:'agendaWeek',
        minTime: '08:00:00',
        customButtons: {
			lesson: {
				text: 'Ajouter une leçon',
				click: function() {
					$state.go('lessons-create');
				}
			},
			reservation: {
				text: 'Réserver une salle',
				click: function() {
					$state.go('reservations');
				}
			}
		},
        header:{
          left: 'title',
          center: $rootScope.user && $rootScope.user.group_id <=2 ? 'lesson reservation' : '',
          right: 'today prev,next'
        }
      }
    };

     $scope.eventSources = [$scope.reservations, $scope.lessons];
}]);