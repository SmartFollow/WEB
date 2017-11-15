angular.module('UsersModule')
	.controller('UserController@profile', ['UserFactory', '$rootScope', '$scope', '$state', 'config', function (UserFactory, $rootScope, $scope, $state, config) {
		$rootScope.pageTitle = 'Votre profil';
		$scope.config = config;

		UserFactory.getProfile(function (response) {
			$scope.profile = response;
		});
	}])
	.controller('UserController@show', ['UserFactory', '$rootScope', '$scope', '$stateParams', 'config', function (UserFactory, $rootScope, $scope, $stateParams, config) {
		$rootScope.pageTitle = "Voir un utilisateur";
		$scope.config = config;

		UserFactory.getUser($stateParams.id, function (response) {
			$scope.profile = response;

			$rootScope.pageTitle = 'Profil de ' + $scope.profile.firstname + ' ' + $scope.profile.lastname;
		});
	}])
	.controller('UserController@index', ['UserFactory', '$rootScope', '$scope', '$stateParams', 'config', function (UserFactory, $rootScope, $scope) {
		$rootScope.pageTitle = "Liste des utilisateurs";

		UserFactory.getUsers(function (users) {
			console.log(users);
			$scope.users = users;
		});
	}])
	.controller('UserController@create', ['UserFactory', '$rootScope', '$scope', '$stateParams', '$timeout', '$state', 'config', 'GroupFactory', 'StudentClassFactory', function (UserFactory, $rootScope, $scope, $stateParams, $timeout, $state, config, GroupFactory, StudentClassFactory) {
		$rootScope.pageTitle = "Créer un utilisateur";

		$scope.user = {};

		GroupFactory.getGroups(function (groups) {
			$scope.groups = groups;
		});

		StudentClassFactory.getStudentClasses(function (classes) {
			$scope.classes = classes;
		});

		$scope.createUser = function () {
			UserFactory.storeUser ({
				firstname: $scope.user.firstname,
				lastname: $scope.user.lastname,
				email: $scope.user.email,
				password: $scope.user.password,
				group: $scope.user.group,
				studentClass: $scope.user.studentClass
			}, function (user) {
				$scope.alerts.success = {
					show: true,
					text: "Votre utilisateur a bien été enregistré, vous allez être redirigé vers sa page."
				};

				$timeout(function () {
					$state.go('users.show', { id: user.id });
				}, 3000);
			});
		}
	}])
	.controller('UserController@edit', ['UserFactory', '$rootScope', '$scope', '$stateParams', '$timeout', '$state', 'config', 'GroupFactory', 'StudentClassFactory', function (UserFactory, $rootScope, $scope, $stateParams, $timeout, $state, config, GroupFactory, StudentClassFactory) {
		$rootScope.pageTitle = "Editer un utilisateur";

		UserFactory.getUser($stateParams.id, function (user) {
			$scope.user = user;
		});

		GroupFactory.getGroups(function (groups) {
			$scope.groups = groups;
		});

		StudentClassFactory.getStudentClasses(function (classes) {
			$scope.classes = classes;
		});

		$scope.editUser= function () {
			UserFactory.updateUser ({
				firstname: $scope.user.firstname,
				lastname: $scope.user.lastname,
				email: $scope.user.email,
				password: $scope.user.password,
				group: $scope.user.group,
				studentClass: $scope.user.studentClass
			}, function (user) {
				$scope.alerts.success = {
					show: true,
					text: "Votre utilisateur a bien été modifié, vous allez être redirigé vers sa page."
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
