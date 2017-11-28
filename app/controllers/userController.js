angular.module('UsersModule')
	.controller('UserController@profile', ['UserFactory', '$rootScope', '$scope', '$state', 'config', function (UserFactory, $rootScope, $scope, $state, config) {
		$rootScope.pageTitle = 'Votre profil';
		$scope.config = config;

		UserFactory.getProfile(function (response) {
			$scope.profile = response;

			// Generating alert messages
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

			console.log($scope.profile);
		});
	}])
	.controller('UserController@show', ['UserFactory', '$rootScope', '$scope', '$stateParams', 'config', function (UserFactory, $rootScope, $scope, $stateParams, config) {
		$rootScope.pageTitle = "Voir un utilisateur";
		$scope.config = config;

		UserFactory.getUser($stateParams.id, function (response) {
			$scope.profile = response;

			// Generating alert messages
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
			UserFactory.storeUser ({
				firstname: $scope.user.firstname,
				lastname: $scope.user.lastname,
				email: $scope.user.email,
				password: $scope.user.password,
				group: $scope.user.group_id,
				student_class: $scope.user.class_id
			}, function (user) {
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
			UserFactory.updateUser($scope.user.id, {
				firstname: $scope.user.firstname,
				lastname: $scope.user.lastname,
				email: $scope.user.email,
				group: $scope.user.group_id,
				student_class: $scope.user.class_id
			}, function (user) {
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
