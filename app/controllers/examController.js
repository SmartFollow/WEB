angular.module('ExamsModule')
	.controller('ExamController@show', ['$rootScope', '$scope', '$stateParams', 'config', 'ExamFactory', function ($rootScope, $scope, $stateParams, config, ExamFactory) {

	}])
	.controller('ExamController@create', ['$rootScope', '$scope', '$stateParams', 'config', 'ExamFactory', function ($rootScope, $scope, $stateParams, config, ExamFactory) {
		$scope.storeExam = function () {
			ExamFactory.storeExam($stateParams.id, {
				description: $scope.lesson.exam.description,
				min_mark: $scope.lesson.exam.min_mark,
				max_mark: $scope.lesson.exam.max_mark,
				type: $scope.lesson.exam.type,
				document_id: $scope.lesson.exam.document_id || undefined
			}, function (exam) {
				$scope.lesson.exam = exam;

				$rootScope.globalAlerts.push({ type: 'success', text: 'Votre examen a bien été ajouté.' });
				$('#modal-exam-create').modal('hide');
			});
		}
	}])
	.controller('ExamController@edit', ['$rootScope', '$scope', '$stateParams', 'config', 'ExamFactory', function ($rootScope, $scope, $stateParams, config, ExamFactory) {
		$scope.updateExam = function () {
			ExamFactory.updateExam($scope.lesson.exam.id, {
				description: $scope.lesson.exam.description,
				min_mark: $scope.lesson.exam.min_mark,
				max_mark: $scope.lesson.exam.max_mark,
				type: $scope.lesson.exam.type,
				document_id: $scope.lesson.exam.document_id || undefined
			}, function (exam) {
				$scope.lesson.exam = exam;

				$rootScope.globalAlerts.push({ type: 'success', text: 'Votre examen a bien été modifié.' });
				$('#modal-exam-edit').modal('hide');
			});
		}
	}])
	.controller('ExamController@delete', ['$rootScope', '$scope', '$stateParams', 'config', '$state', 'ExamFactory', function ($rootScope, $scope, $stateParams, config, $state, ExamFactory) {
		if (confirm("Êtes-vous sûr de vouloir supprimer l'examen ?"))
		{
			ExamFactory.deleteExam($stateParams.id, function () {
				$state.go('lessons.show', { id: $stateParams.lessonId });
			});
		}
		else {
			$state.go('lessons.show', { id: $stateParams.lessonId });
		}
	}])
	.controller('ExamController@marks', ['$rootScope', '$scope', '$stateParams', 'config', '$state', 'MarkFactory', function ($rootScope, $scope, $stateParams, config, $state, MarkFactory) {
		$scope.updateMark = function (student) {
			student.inUpdate = true;
			if (!student.exam_mark || !student.exam_mark.id) { // There is no mark for the student yet
				MarkFactory.storeMark($scope.lesson.exam.id, {
					student_id: student.id,
					mark: student.exam_mark.mark,
					comment: student.exam_mark.comment
				}, function (mark) {
					student.exam_mark = mark;
					student.inUpdate = false;
				});
			}
			else {
				MarkFactory.updateMark($scope.lesson.exam.id, student.exam_mark.id, {
					mark: student.exam_mark.mark,
					comment: student.exam_mark.comment
				}, function (mark) {
					student.exam_mark = mark;
					student.inUpdate = false;
				});
			}
		};
	}]);
