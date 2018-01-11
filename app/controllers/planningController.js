angular.module('app')
	.controller('PlanningController', ['UserFactory', '$http', '$rootScope', '$scope', 'OAuth', '$state', 'config', 'AccessRuleFactory', function (UserFactory, $http, $rootScope, $scope, OAuth, $state, config, AccessRuleFactory) {
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
					var events = [];
					response.data.forEach(function (lesson) {
						var title = lesson.subject.name;
						title += lesson.reservation != null ? (" en " + lesson.reservation.room.identifier) : (" - salle non définie");

						events.push({
							id: lesson.id,
							title: title,
							start: lesson.start.split(" ")[1],
							end: lesson.end.split(" ")[1],
							url: "#!/lessons/" + lesson.id,
							stick: true,
							color: intToRGB(hashCode(lesson.subject.name)),
							dow: [new Date(lesson.start).getDay()],
							ranges: [{start: lesson.start.split(" ")[0], end: lesson.end.split(" ")[0]}]
						});
					});

					lessons = events;

					callback(events);
				}, function errorCallback(response) {
					console.log(response);
				});
			}
		};


		$scope.reservations = function (start, end, timezone, callback) {
			if (AccessRuleFactory.get().includes('reservations.index')) {
				if (reservations)
					callback(reservations);
				else {
					$http({
						method: 'GET',
						url: config.apiUrl + "api/reservations"
					}).then(function successCallback(response) {
						var events = [];
						response.data.forEach(function (reservation) {
							if (!reservation.has_lesson) {
								events.push({
									id: reservation.id,
									title: "Reservation de la salle " + reservation.room.identifier,
									start: reservation.time_start,
									end: reservation.time_end,
									url: "#!/reservations/" + reservation.id + "/edit",
									stick: true,
									color: "#888888",
									dow: [weekday[reservation.day]],
									ranges: [{start: reservation.date_start, end: reservation.date_end}]
								});
							}
						});

						reservations = events;
						callback(events);
					}, function errorCallback(response) {
						console.log(response);
					});
				}
			}
			else {
				reservations = [];
				callback([]);
			}
		};

		$scope.uiConfig = {
			calendar: {
				lang: 'fr',
				height: 820,
				defaultView: 'agendaWeek',
				minTime: '07:00:00',
				maxTime: '22:00:00',
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

		/*
		 * Functions used to generate a random color from a string (the name of the subject)
		 */
		function hashCode(str) {
			var hash = 0;
			for (var i = 0; i < str.length; i++) {
				hash = str.charCodeAt(i) + ((hash << 5) - hash);
			}
			return hash;
		}
		function intToRGB(i){
			var c = (i & 0x00FFFFFF)
				.toString(16)
				.toUpperCase();

			return "#" + "00000".substring(0, 6 - c.length) + c;
		}
	}]);