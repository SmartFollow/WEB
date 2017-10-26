angular.module('app')
	.controller('PlanningController', ['UserFactory', '$http', '$rootScope', '$scope', 'OAuth', '$state', 'config', function (UserFactory, $http, $rootScope, $scope, OAuth, $state, config) {
	if ($state.current.data != null)
		$rootScope.pageTitle = $state.current.data.pageTitle;

	var lessons;
	var reservations;
	var weekday = new Array(7);
	weekday["SUNDAY"] = 0;
	weekday["MONDAY"] = 1;
	weekday["TUESDAY"] = 2;
	weekday["WEDNESDAY"] = 3;
	weekday["THURSDAY"] = 4;
	weekday["FRIDAY"] = 5;
	weekday["SATURDAY"] = 6;

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
				angular.forEach(response.data, function (lesson, key) {
					if ($rootScope.user.group_id <= 2 || $rootScope.user.class_id == lesson.student_class_id) {
						this.push({
							id: lesson.id,
							title: lesson.subject.name + " en " + lesson.reservation.room.identifier,
							start: lesson.start.split(" ")[1],
							end: lesson.end.split(" ")[1],
							url: $rootScope.user && $rootScope.user.group_id <= 2 ? "#/lessons/" + lesson.id : "#/lessons-student/" + lesson.id,
							stick: true,
							dow: [new Date(lesson.start).getDay()],
							ranges: [{start: lesson.start.split(" ")[0], end: lesson.end.split(" ")[0]}]
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
				angular.forEach(response.data, function (reservation, key) {
					if ($rootScope.user.group_id <= 2) {
						this.push({
							id: reservation.id,
							title: reservation.room_id == 1 ? 'Reservation de la salle D301' : 'Reservation de la salle D302',
							start: reservation.time_start,
							end: reservation.time_end,
							url: "#/reservations/" + reservation.id + "/edit",
							stick: true,
							color: "#888888",
							dow: [weekday[reservation.day]],
							ranges: [{start: reservation.date_start, end: reservation.date_end}]
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
		calendar: {
			lang: 'fr',
			height: 820,
			defaultView: 'agendaWeek',
			minTime: '08:00:00',
			customButtons: {
				lesson: {
					text: 'Ajouter une leçon',
					click: function () {
						$state.go('lessons-create');
					}
				},
				reservation: {
					text: 'Réserver une salle',
					click: function () {
						$state.go('reservations');
					}
				}
			},
			header: {
				left: 'title',
				center: $rootScope.user && $rootScope.user.group_id <= 2 ? 'lesson reservation' : '',
				right: 'today prev,next'
			},
			eventRender: function (event, element, view) {

				return (event.ranges.filter(function (range) {
					return (event.start.subtract(1, 'days').isSameOrBefore(range.end) &&
						event.end.add(1, 'days').isSameOrAfter(range.start));
				}).length) > 0;
			},
		}
	};

	$scope.eventSources = [$scope.reservations, $scope.lessons];
}]);