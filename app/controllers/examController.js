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
	}]);
