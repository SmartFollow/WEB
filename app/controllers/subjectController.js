
angular.module('SubjectsModule')
	.controller('SubjectController@index', ['$scope', '$state', '$rootScope','SubjectFactory', function ($scope, $state, $rootScope, SubjectFactory) {
		$rootScope.pageTitle = "Matières";

		SubjectFactory.getSubjects(function (subjects) {
			$scope.subjects = subjects;
		});

	}])
	.controller('SubjectController@create', ['$scope', '$state', '$rootScope','SubjectFactory', '$timeout', function ($scope, $state, $rootScope, SubjectFactory, $timeout) {
		$rootScope.pageTitle = "Créer une matière";

		$scope.alerts = {
			success: {},
			danger: {}
		};

		SubjectFactory.getCreateSubject(function (data) {
			$scope.create = data;
		});

		$scope.createSubject = function(){
			SubjectFactory.createSubject({
				level: $scope.level_id,
				name: $scope.name,
				description: $scope.description,
				teacher: $scope.teacher_id
			}, function (subject) {
				$scope.alerts.success = {
					show: true,
					text: "Votre matière a bien été enregistré, vous allez être redirigé vers sa page."
				};

				$timeout(function () {
					$state.go('subjects.show', { id: subject.id });
				}, 3000);
			});
		};
	}])
	.controller('SubjectController@edit', ['$scope', '$state', '$rootScope','SubjectFactory', '$timeout', '$stateParams', function ($scope, $state, $rootScope, SubjectFactory, $timeout, $stateParams) {
		$rootScope.pageTitle = "Editer une matière";

		$scope.alerts = {
			success: {},
			danger: {}
		};

		SubjectFactory.getCreateSubject(function (data) {
			$scope.create = data;
			SubjectFactory.getSubject($stateParams.id, function (subject) {
				$scope.subject = subject;
			});
		});

		$scope.updateSubject = function(){
			SubjectFactory.updateSubject(
			$stateParams.id,
			{
				level: $scope.subject.level_id,
				name: $scope.subject.name,
				description: $scope.subject.description,
				teacher: $scope.subject.teacher_id
			}, function (subject) {
				$scope.alerts.success = {
					show: true,
					text: "Votre matière a bien été édité, vous allez être redirigé vers sa page."
				};

				$timeout(function () {
					$state.go('subjects.show', { id: subject.id });
				}, 3000);
			});
		};
	}])
	.controller('SubjectController@show', ['$rootScope', '$scope', '$state', '$stateParams', 'SubjectFactory', function ($rootScope, $scope, $state, $stateParams, SubjectFactory) {
		$rootScope.pageTitle = "Matière";

		SubjectFactory.getSubject($stateParams.id, function (subject) {
			$scope.subject = subject;
		});
	}])
	.controller('SubjectController@delete', ['$rootScope', '$scope', '$state', '$stateParams', 'SubjectFactory', function ($rootScope, $scope, $state, $stateParams, SubjectFactory) {
		SubjectFactory.deleteSubject($stateParams.id, function () {
			$state.go('subjects.index');
		});
	}]);