angular.module('app')
	.controller('LessonController@create', ['UserFactory', '$scope', '$state', '$rootScope', '$http', '$filter', 'config', '$timeout', function (UserFactory, $scope, $state, $rootScope, $http, $filter, config, $timeout) {
		$("#selectedLevel").hide();
		$("#selectedSubject").hide();
		$("#selectedClasse").hide();
		$("#selectedReservation").hide();

		if ($state.current.data != null)
			$rootScope.pageTitle = $state.current.data.pageTitle;

		$http({
			method: 'GET',
			url: config.apiUrl + "api/lessons/create"
		}).then(function successCallback(response) {
			$scope.lessons = response.data;
			$("#selectedLevel").show();
		}, function errorCallback(response) {
			console.log(response);
		});

		$scope.selectSubject = function () {
			$("#selectedSubject").show();
		};
		$scope.selectClasse = function () {
			$("#selectedClasse").show();
		};
		$scope.selectReservation = function () {
			$("#selectedReservation").show();
		};
		$scope.selectFinish = function () {
			$("#create").removeClass("disabled");
		};
		$scope.create = function () {
			$http({
				method: 'POST',
				url: config.apiUrl + "api/lessons",
				data: {
					subject_id: $scope.selectedSubject.id,
					reservation_id: $("#reservation").val(),
					student_class_id: $scope.selectedClasse.id
				}
			}).then(function successCallback(response) {
				$(".alert-success").show();
				$timeout(function () {
					$state.go('planning');
				}, 3000);
			}, function errorCallback(response) {
				$(".alert-danger").show();
			});
		};
	}])
	.controller('LessonController@edit', ['$scope', '$state', '$rootScope', '$http', '$filter', '$stateParams', 'config', function ($scope, $state, $rootScope, $http, $filter, $stateParams, config) {

		if ($state.current.data != null)
			$rootScope.pageTitle = $state.current.data.pageTitle;

		$http({
			method: 'GET',
			url: config.apiUrl + "api/lessons/create"
		}).then(function successCallback(response) {
			$scope.lessons = response.data;

			$http({
				method: 'GET',
				url: config.apiUrl + "api/lessons/" + $stateParams.id
			}).then(function successCallback(response) {
				$scope.lesson = response.data;
				var level = getObjectById($scope.lessons.levels, response.data.student_class.level_id);
				$scope.selectedLevel = level;
				console.log(level);
				var subject = getObjectById(level.subjects, response.data.subject_id);
				$scope.selectedSubject = subject;
				$scope.selectedClasse = getObjectById(subject.student_classes, response.data.student_class_id);
				console.log(response);
			}, function errorCallback(response) {
				console.log(response);
			});


			console.log(response);
		}, function errorCallback(response) {
			console.log(response);
		});

		function getObjectById(objects, id) {
			for (var i = 0; i < objects.length++; i++) {
				if (objects[i].id == id) {
					return (objects[i]);
				}
			}
			;
			return (null);
		}

		$scope.edit = function () {
			$http({
				method: 'PUT',
				url: config.apiUrl + "api/lessons/" + $stateParams.id,
				data: {
					subject_id: $scope.selectedSubject.id,
					reservation_id: $("#reservation").val(),
					student_class_id: $scope.selectedClasse.id,
					id: $stateParams.id
				}
			}).then(function successCallback(response) {
				console.log(response);
			}, function errorCallback(response) {
				console.log(response);
			});
		};
	}])
	.controller('LessonController@delete', ['$scope', '$state', '$rootScope', '$http', '$filter', '$stateParams', 'config', function ($scope, $state, $rootScope, $http, $filter, $stateParams, config) {
		$http({
			method: 'DELETE',
			url: config.apiUrl + "api/lessons/" + $stateParams.id,
			data: {id: $stateParams.id}
		}).then(function successCallback(response) {
			console.log(response);
		}, function errorCallback(response) {
			console.log(response);
		});

	}])
	.controller('LessonController@show', ['$scope', '$state', '$rootScope', '$http', '$stateParams', 'config', 'LessonFactory', 'EvaluationFactory', function ($scope, $state, $rootScope, $http, $stateParams, config, LessonFactory, EvaluationFactory) {
		$rootScope.pageTitle = "Déroulement du cours";
		$scope.config = config;

		EvaluationFactory.getCreateFormData($stateParams.id, function (data) {
			$scope.criteria = data.criteria;
		});

		LessonFactory.getLesson($stateParams.id, function (lesson) {
			$scope.lesson = lesson;

			$scope.lesson.start = new Date($scope.lesson.start.replace('/-/g',"/"));
			$scope.lesson.end = new Date($scope.lesson.end.replace('/-/g',"/"));
			if ($scope.lesson.subject.teacher)
				$scope.lesson.subject.teacher.avatar = config.apiUrl + $scope.lesson.subject.teacher.avatar;
		});

		/**
		 * Updating the status (present / absent / delay) of a student
		 *
		 * @param student
		 */
		$scope.updateStatus = function(student) {
			if (!student.inUpdate) {
				student.inUpdate = true;
				$scope.execAfterEvaluationExists(student, function (student) {
					if (student.lesson_evaluation.absence) {
						EvaluationFactory.storeDelay(student.lesson_evaluation.id, function (delay) {
							student.lesson_evaluation.absence = null;
							student.lesson_evaluation.delay = delay;
							student.inUpdate = false;
						});
					}
					else if (student.lesson_evaluation.delay) {
						EvaluationFactory.deleteDelay(student.lesson_evaluation.id, student.lesson_evaluation.delay.id, function (data) {
							student.lesson_evaluation.delay = null;
							student.inUpdate = false;
						});
					}
					else {
						EvaluationFactory.storeAbsence(student.lesson_evaluation.id, function (absence) {
							student.lesson_evaluation.absence = absence;
							student.inUpdate = false;
						});
					}
				});
			}
		};

		/**
		 * Change the value of the criterion evaluation for a specific student by
		 * the value of "valueUpdate"
		 *
		 * @param student
		 * @param criterion
		 * @param valueUpdate
		 */
		$scope.updateEvaluationCriterion = function(student, criterion, valueUpdate) {
			if (!student.inUpdate) {
				student.inUpdate = true;
				$scope.execAfterEvaluationExists(student, function (student) {

					var criterionEvaluation = student.lesson_evaluation.criteria.filter(e => e.id == criterion.id);
					criterionEvaluation = criterionEvaluation && criterionEvaluation.length > 0 ? criterionEvaluation[0] : null;

					if (criterionEvaluation) { // This criterion already has an evaluation, update the value
						var newValue = criterionEvaluation.pivot.value + valueUpdate;
						newValue = newValue < 0 ? 0 : newValue;

						EvaluationFactory.updateCriterionEvaluation(student.lesson_evaluation.id, criterion.id, {value: newValue}, function (criteria) {
							student.lesson_evaluation.criteria = criteria;
							student.inUpdate = false;
						});
					}
					else { // This criterion doesn't have an evaluation, create the evaluation
						var value = valueUpdate;

						EvaluationFactory.storeCriterionEvaluation(student.lesson_evaluation.id, {
							criterion_id: criterion.id,
							value: value >= 0 ? value : 0
						}, function (criteria) {
							student.lesson_evaluation.criteria = criteria;
							student.inUpdate = false;
						});
					}
				});
			}
		};

		/**
		 * Update an evaluation's comment
		 *
		 * @param student
		 */
		$scope.updateComment = function(student) {
			if (!student.inUpdate) {
				student.inUpdate = true;
				$scope.execAfterEvaluationExists(student, function (student) {
					EvaluationFactory.updateEvaluation(student.lesson_evaluation.id, {
						comment: student.lesson_evaluation.comment
					}, function (evaluation) {
						student.inUpdate = false;
					});
				});
			}
		};

		/**
		 * Execute a function after making sure the student evaluation exists
		 * or after creating it otherwise
		 *
		 * @param student
		 * @param callback
		 */
		$scope.execAfterEvaluationExists = function(student, callback) {
			if (!student.lesson_evaluation) {
				EvaluationFactory.storeEvaluation({
					student_id: student.id,
					lesson_id: $stateParams.id
				}, function (evaluation) {
					student.lesson_evaluation = evaluation;
					callback(student);
				});
			}
			else
				callback(student);
		};

		/**
		 * Return the criterion evaluation from the specified criterion from an evaluation
		 *
		 * @param evaluation
		 * @param criterion
		 * @returns {null}
		 */
		$scope.criterionFromEvaluation = function (evaluation, criterion) {
			if (!evaluation || !criterion)
				return null;

			var result = evaluation.criteria.filter(e => e.id == criterion.id);

			return result && result.length > 0 ? result[0] : null;
		};

		$scope.setEditHomework = function (homework) {
			$scope.editHomework = homework;
		};

		$scope.setShowHomework = function (homework) {
			$scope.showHomework = homework;
		};

		$scope.setEditDocument = function (document) {
			$scope.editDocument = document;
		};

		$scope.setShowDocument = function (document) {
			$scope.showDocument = document;
		};


		$scope.tabClick = function (nb) {
			var button = $(".breadcrumb li").eq(nb);
			if (!button.hasClass("legend") && !button.hasClass("active")) {
				var id = $(".breadcrumb li").index(button) - 1;
				var tab = $(".tab .tab-pane").eq(id);
				tab.show();
				var prevId = $(".breadcrumb").find(".active").index() - 1;
				var prevTab = $(".tab .tab-pane").eq(prevId);
				prevTab.hide();
				$(".breadcrumb").find(".active").removeClass("active");
			}
		};
	}])
	.controller('lessonsIdStudent', ['UserFactory', '$scope', '$state', '$rootScope', '$http', '$filter', '$stateParams', 'config', function (UserFactory, $scope, $state, $rootScope, $http, $filter, $stateParams, config) {
		$http({
			method: 'GET',
			url: config.apiUrl + "api/lessons/" + $stateParams.id
		}).then(function successCallback(response) {
			$scope.lesson = response.data;
			if ($scope.lesson.exam.type == "home")
				$scope.hm = true;
			console.log(response);
		}, function errorCallback(response) {
			console.log(response);
		});
	}]);