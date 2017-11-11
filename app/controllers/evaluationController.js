angular.module('app')
	.controller('EvaluationController', ['$scope', '$state', '$rootScope', '$http', '$filter', '$stateParams', 'config', function ($scope, $state, $rootScope, $http, $filter, $stateParams, config) {
		// Criteria
		$scope.postEvaluationCriteria = function (criteria, student) {
			$http({
				method: 'POST',
				url: config.apiUrl + "api/evaluations/" + student.evaluation.id + "/criteria",
				data: {
					criterion_id: criteria.id,
					value: "1"
				}
			}).then(function successCallback(response) {
				console.log(response);
			}, function errorCallback(response) {
				console.log(response);
			});
		};

		// Criteria
		$scope.createEvaluationsByCriteria = function (criteria, student) {
			criteria.value += 1;
			if (angular.isUndefined(student.evaluation)) {
				var file = {
					student_id: student.id,
					lesson_id: $stateParams.id
				};
				$http({
					method: 'POST',
					url: config.apiUrl + "api/evaluations",
					data: file
				}).then(function successCallback(response) {
					student.evaluation = response.data;
					console.log(response);
					$scope.postEvaluationCriteria(criteria, student);
				}, function errorCallback(response) {
					console.log(response);
				});
			}
			else
				$scope.postEvaluationCriteria(criteria, student);

		};

		// Delay and Absences
		$scope.postEvaluation = function (key, student) {
			if ($("#student-" + key).find('.time-lesson').is(":hidden") && $("#student-" + key).find('.cross-lesson').is(":hidden")) {
				// Si en retard
				$("#student-" + key).find('.time-lesson').show();

				var currentTime = new Date();

				$http({
					method: 'POST',
					url: config.apiUrl + "api/evaluations/" + student.evaluation.id + "/delays",
					data: {
						arrived_at: currentTime.getHours() + ":" + currentTime.getMinutes()
					}
				}).then(function successCallback(response) {
					console.log(response);
				}, function errorCallback(response) {
					console.log(response);
				});

			}
			else if ($("#student-" + key).find('.time-lesson').is(":hidden") && $("#student-" + key).find('.cross-lesson').is(":visible")) {
				// Annulation de l'absence
				$("#student-" + key).find('.time-lesson').hide();
				$("#student-" + key).find('.cross-lesson').hide();
			}
			else {
				// Si absent
				$("#student-" + key).find('.time-lesson').hide();
				$("#student-" + key).find('.cross-lesson').show();

				$http({
					method: 'POST',
					url: config.apiUrl + "api/evaluations/" + student.evaluation.id + "/absences"
				}).then(function successCallback(response) {
					console.log(response);
				}, function errorCallback(response) {
					console.log(response);
				});
			}
		};

		// Delay and Absences
		$scope.createEvaluations = function (key, student) {

			if (angular.isUndefined(student.evaluation)) {
				var file = {
					student_id: student.id,
					lesson_id: $stateParams.id
				};

				$http({
					method: 'POST',
					url: config.apiUrl + "api/evaluations",
					data: file
				}).then(function successCallback(response) {
					student.evaluation = response.data;
					console.log(response);
					$scope.postEvaluation(key, student);
				}, function errorCallback(response) {
					console.log(response);
				});
			}
			else
				$scope.postEvaluation(key, student);
		}
	}]);