angular.module('StudentClassesModule')
	.controller('StudentClassController@index', ['$scope', '$rootScope', '$stateParams', 'config', 'StudentClassFactory', function ($scope, $rootScope, $stateParams, config, StudentClassFactory) {
		$rootScope.pageTitle = "Liste des classes";
		$scope.config = config;

		StudentClassFactory.getStudentClasses(function (data) {
			$scope.classes = data;
		});
	}])
	.controller('StudentClassController@show', ['$scope', '$rootScope', '$stateParams', 'config', 'StudentClassFactory', function ($scope, $rootScope, $stateParams, config, StudentClassFactory) {
		$rootScope.pageTitle = "Affichage d'une classe";
		$scope.config = config;

		StudentClassFactory.getStudentClass($stateParams.id, function (data) {
			$scope.class = data;
			$rootScope.pageTitle = "Affichage d'une classe : " + $scope.class.name;
		});
	}])
	.controller('StudentClassController@create', ['$scope', '$rootScope', '$stateParams', 'config', 'StudentClassFactory', '$timeout', '$state', function ($scope, $rootScope, $stateParams, config, StudentClassFactory, $timeout, $state) {
		$rootScope.pageTitle = "Créer une classe";
		$scope.config = config;
		$scope.alerts = {
			success: {},
			danger: {}
		};

		StudentClassFactory.getStoreStudentClass(function (data) {
			$scope.class = data;
		});

		$scope.loadStudents = function($query) {
			var users = $scope.class.users;
			return users.filter(function(user) {
					return user.group_id == 4 && (user.firstname.toLowerCase().indexOf($query.toLowerCase()) != -1 || user.lastname.toLowerCase().indexOf($query.toLowerCase()) != -1 || user.email.toLowerCase().indexOf($query.toLowerCase()) != -1);
			});
		};

		$scope.loadSubjects = function($query) {
			var subjects = $scope.class.subjects;
			return subjects.filter(function(subject) {
					return subject.level_id == $scope.class.level && subject.name.toLowerCase().indexOf($query.toLowerCase()) != -1;
			});
		};

		$scope.createStudentClass = function () {
			StudentClassFactory.storeStudentClass ({
				name: $scope.class.name,
				level: $scope.class.level,
				main_teacher_id: $scope.class.main_teacher
			}, function (studentClass) {
				if ($scope.studentsList && $scope.studentsList.length > 0 && $scope.subjectsList && $scope.subjectsList.length > 0)
				{
					StudentClassFactory.updateStudents(
						studentClass.id,
						{students: $scope.studentsList.map(a => a.id)},
						function (success) {
							StudentClassFactory.updateSubjects(
								studentClass.id,
								{subjects: $scope.subjectsList.map(a => a.id)},
								function (success) {
									$scope.alerts.success = {
										show: true,
										text: "Votre classe a bien été enregistré, vous allez être redirigé vers sa page."
									};
									$timeout(function () {
										$state.go('student-classes.show', { id: studentClass.id });
									}, 3000);
								}
							);
						}
					);
				}
				else if ($scope.studentsList && $scope.studentsList.length > 0) {
					StudentClassFactory.updateStudents(
						studentClass.id,
						{students: $scope.studentsList.map(a => a.id)},
						function (success) {
							$scope.alerts.success = {
								show: true,
								text: "Votre classe a bien été enregistré, vous allez être redirigé vers sa page."
							};
							$timeout(function () {
								$state.go('student-classes.show', { id: studentClass.id });
							}, 3000);
						}
					);
				}
				else if ($scope.subjectsList && $scope.subjectsList.length > 0) {
					StudentClassFactory.updateSubjects(
						studentClass.id,
						{subjects: $scope.subjectsList.map(a => a.id)},
						function (success) {
							$scope.alerts.success = {
								show: true,
								text: "Votre classe a bien été enregistré, vous allez être redirigé vers sa page."
							};
							$timeout(function () {
								$state.go('student-classes.show', { id: studentClass.id });
							}, 3000);
						}
					);
				}
				else {
					$scope.alerts.success = {
						show: true,
						text: "Votre classe a bien été enregistré, vous allez être redirigé vers sa page."
					};
					$timeout(function () {
						$state.go('student-classes.show', { id: studentClass.id });
					}, 3000);
				}
			});
		}
	}])
	.controller('StudentClassController@edit', ['$scope', '$rootScope', '$stateParams', 'config', 'StudentClassFactory', '$timeout', '$state', function ($scope, $rootScope, $stateParams, config, StudentClassFactory, $timeout, $state) {
		$rootScope.pageTitle = "Editer une classe";
		$scope.config = config;
		$scope.alerts = {
			success: {},
			danger: {}
		};

		StudentClassFactory.getStudentClass($stateParams.id, function (data) {
			$scope.class = data;
			StudentClassFactory.getUpdateStudentClass($stateParams.id, function (data) {
				$scope.class.update = data;
			});
		});

		$scope.loadStudents = function($query) {
			var users = $scope.class.update.users;
			return users.filter(function(user) {
					return user.group_id == 4 && (user.firstname.toLowerCase().indexOf($query.toLowerCase()) != -1 || user.lastname.toLowerCase().indexOf($query.toLowerCase()) != -1 || user.email.toLowerCase().indexOf($query.toLowerCase()) != -1);
			});
		};

		$scope.loadSubjects = function($query) {
			var subjects = $scope.class.update.subjects;
			return subjects.filter(function(subject) {
					return subject.level_id == $scope.class.level.id && subject.name.toLowerCase().indexOf($query.toLowerCase()) != -1;
			});
		};

		$scope.editStudentClass = function () {
			StudentClassFactory.updateStudentClass ($stateParams.id, {
				name: $scope.class.name,
				level: $scope.class.level.id,
				main_teacher_id: $scope.class.main_teacher.id
			}, function (studentClass) {
				if ($scope.class.students && $scope.class.students.length > 0 && $scope.class.subjects && $scope.class.subjects.length > 0)
				{
					StudentClassFactory.updateStudents(
						studentClass.id,
						{students: $scope.class.students.map(a => a.id)},
						function (success) {
							StudentClassFactory.updateSubjects(
								studentClass.id,
								{subjects: $scope.class.subjects.map(a => a.id)},
								function (success) {
									$scope.alerts.success = {
										show: true,
										text: "Votre classe a bien été mise à jour, vous allez être redirigé vers sa page."
									};
									$timeout(function () {
										$state.go('student-classes.show', { id: studentClass.id });
									}, 3000);
								}
							);
						}
					);
				}
				else if ($scope.class.students && $scope.class.students.length > 0) {
					StudentClassFactory.updateStudents(
						studentClass.id,
						{students: $scope.class.students.map(a => a.id)},
						function (success) {
							$scope.alerts.success = {
								show: true,
								text: "Votre classe a bien été mise à jour, vous allez être redirigé vers sa page."
							};
							$timeout(function () {
								$state.go('student-classes.show', { id: studentClass.id });
							}, 3000);
						}
					);
				}
				else if ($scope.class.subjects && $scope.class.subjects.length > 0) {
					StudentClassFactory.updateSubjects(
						studentClass.id,
						{subjects: $scope.class.subjects.map(a => a.id)},
						function (success) {
							$scope.alerts.success = {
								show: true,
								text: "Votre classe a bien été mise à jour, vous allez être redirigé vers sa page."
							};
							$timeout(function () {
								$state.go('student-classes.show', { id: studentClass.id });
							}, 3000);
						}
					);
				}
				else {
					$scope.alerts.success = {
						show: true,
						text: "Votre classe a bien été mise à jour, vous allez être redirigé vers sa page."
					};
					$timeout(function () {
						$state.go('student-classes.show', { id: studentClass.id });
					}, 3000);
				}
			});
		}
	}])
	.controller('StudentClassController@delete', ['$scope', '$state', '$stateParams', 'config', 'StudentClassFactory', function ($scope, $state, $stateParams, config, StudentClassFactory) {
		if (confirm('Êtes-vous sûr de vouloir supprimer la salle ?'))
		{
			StudentClassFactory.deleteStudentClass($stateParams.id, function () {
				$state.go('student-classes.index');
			});
		}
		else {
			$state.go('student-classes.index')
		}
	}]);
