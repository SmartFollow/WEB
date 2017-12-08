angular.module('UsersModule')
	.controller('UserController@profile', ['$rootScope', '$scope', '$state', 'config', 'UserFactory', 'GraphFactory', function ($rootScope, $scope, $state, config, UserFactory, GraphFactory) {
		$rootScope.pageTitle = 'Votre profil';
		$scope.config = config;

		UserFactory.getProfile(function (response) {
			$scope.profile = response;

			// Generating alert messages
			if (angular.isDefined($scope.profile.alerts))
				$scope.profile.alerts.forEach(function (alert) {
					var message = "Vos " + alert.criterion.name.toLowerCase() + (alert.criterion.name[alert.criterion.name.length - 1] == 's' ? '' : 's');
					if (alert.previous_student_value !== null) {
						message +=  " ont ";
						message += (alert.student_value >= alert.previous_student_value ? 'augmenté' : 'baissé') + " depuis la dernière évaluation, ";
					}
					else {
						message +=  " sont ";
						message += (alert.student_value >= alert.class_value ? 'supérieurs' : 'inférieurs') + " à votre classe, ";
					}
					message += { success: 'félicitations', info: 'continuez ainsi', warning: 'attention', danger: 'attention' }[alert.type] + " !";

					alert.message = message;
				});

			$scope.profile.avatar = config.apiUrl + $scope.profile.avatar;

			$scope.profile.today_given_lessons.forEach(function (e) {
				e.start = new Date(e.start.replace('/-/g',"/"));
				e.end = new Date(e.end.replace('/-/g',"/"));
			});
			$scope.profile.today_received_lessons.forEach(function (e) {
				e.start = new Date(e.start.replace('/-/g',"/"));
				e.end = new Date(e.end.replace('/-/g',"/"));
			});
		});

		GraphFactory.getProfileGraphs(function (graphs) {
			$scope.graphs = graphs;

			$scope.showGraphs = false;
			$scope.graphs.forEach(function (graph) {
				graph.hasValues = graph.values.length > 0;

				$scope.showGraphs = graph.hasValues || $scope.showGraphs;
			});
		});
	}])
	.controller('UserController@show', ['$rootScope', '$scope', '$stateParams', 'config', 'UserFactory', 'GraphFactory', function ($rootScope, $scope, $stateParams, config, UserFactory, GraphFactory) {
		$rootScope.pageTitle = "Voir un utilisateur";
		$scope.config = config;

		UserFactory.getUser($stateParams.id, function (response) {
			$scope.profile = response;

			// Generating alert messages
			if (angular.isDefined($scope.profile.alerts))
				$scope.profile.alerts.forEach(function (alert) {
					var message = "Vos " + alert.criterion.name.toLowerCase() + (alert.criterion.name[alert.criterion.name.length - 1] == 's' ? '' : 's');
					if (alert.previous_student_value !== null) {
						message +=  " ont ";
						message += (alert.student_value >= alert.previous_student_value ? 'augmenté' : 'baissé') + " depuis la dernière évaluation, ";
					}
					else {
						message +=  " sont ";
						message += (alert.student_value >= alert.class_value ? 'supérieurs' : 'inférieurs') + " à votre classe, ";
					}
					message += { success: 'félicitations', info: 'continuez ainsi', warning: 'attention', danger: 'attention' }[alert.type] + " !";

					alert.message = message;
				});

			$scope.profile.avatar = config.apiUrl + $scope.profile.avatar;
			$rootScope.pageTitle = 'Profil de ' + $scope.profile.firstname + ' ' + $scope.profile.lastname;
		});

		GraphFactory.getUserGraphs($stateParams.id, function (graphs) {
			$scope.graphs = graphs;

			$scope.showGraphs = false;
			$scope.graphs.forEach(function (graph) {
				graph.hasValues = graph.values.length > 0;

				$scope.showGraphs = graph.hasValues || $scope.showGraphs;
			});
		});
	}])
	.controller('UserController@index', ['UserFactory', '$rootScope', '$scope', '$stateParams', 'config', function (UserFactory, $rootScope, $scope) {
		$rootScope.pageTitle = "Liste des utilisateurs";

		UserFactory.getUsers(function (users) {
			$scope.users = users;
		});
	}])
	.controller('UserController@create', ['UserFactory', '$rootScope', '$scope', '$stateParams', '$timeout', '$state', 'config', 'GroupFactory', 'StudentClassFactory', function (UserFactory, $rootScope, $scope, $stateParams, $timeout, $state, config, GroupFactory, StudentClassFactory) {
		$rootScope.pageTitle = "Créer un utilisateur";
		$scope.alerts = {
			success: {},
			danger: {}
		};

		$scope.user = {};

		UserFactory.getCreateFormData(function (data) {
			$scope.groups = data.groups;
			$scope.studentClasses = data.student_classes;
		});

		$scope.createUser = function () {
			var formData = new FormData();
			formData.append('firstname', $scope.user.firstname);
			formData.append('lastname', $scope.user.lastname);
			formData.append('email', $scope.user.email);
			formData.append('password', $scope.user.password);
			formData.append('group', $scope.user.group_id);
			if ($scope.user.class_id)
				formData.append('student_class', $scope.user.class_id);
			if ($('input[name="avatar"]')[0].files[0])
				formData.append('avatar', $('input[name="avatar"]')[0].files[0]);

			UserFactory.storeUser (formData, function (user) {
				$scope.alerts.success = {
					show: true,
					text: "L'utilisateur a bien été enregistré, vous allez être redirigé vers sa page."
				};

				$timeout(function () {
					$state.go('users.show', { id: user.id });
				}, 3000);
			});
		}
	}])
	.controller('UserController@edit', ['UserFactory', '$rootScope', '$scope', '$stateParams', '$timeout', '$state', 'config', 'GroupFactory', 'StudentClassFactory', function (UserFactory, $rootScope, $scope, $stateParams, $timeout, $state, config, GroupFactory, StudentClassFactory) {
		$rootScope.pageTitle = "Editer un utilisateur";
		$scope.alerts = {
			success: {},
			danger: {}
		};

		UserFactory.getEditFormData($stateParams.id, function (data) {
			$scope.user = data.user;
			$scope.groups = data.groups;
			$scope.studentClasses = data.student_classes;
		});

		$scope.editUser = function () {
			var formData = new FormData();
			formData.append('firstname', $scope.user.firstname);
			formData.append('lastname', $scope.user.lastname);
			formData.append('email', $scope.user.email);
			formData.append('password', $scope.user.password);
			formData.append('group', $scope.user.group_id);
			if ($scope.user.class_id)
				formData.append('student_class', $scope.user.class_id);
			if ($('input[name="avatar"]')[0].files[0])
				formData.append('avatar', $('input[name="avatar"]')[0].files[0]);

			UserFactory.updateUser($scope.user.id, formData, function (user) {
				$scope.alerts.success = {
					show: true,
					text: "L'utilisateur a bien été modifié, vous allez être redirigé vers sa page."
				};

				$timeout(function () {
					$state.go('users.show', { id: user.id });
				}, 3000);
			});
		}
	}])
	.controller('UserController@delete', ['$rootScope', '$scope', '$state', '$stateParams', 'UserFactory', function ($rootScope, $scope, $state, $stateParams, UserFactory) {
		UserFactory.deleteUser($stateParams.id, function () {
			$state.go('users.index');
		});
	}]);
