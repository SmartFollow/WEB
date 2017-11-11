angular.module('UsersModule')
	.controller('UserController@profile', ['UserFactory', '$http', '$rootScope', '$scope', 'OAuth', '$state', 'config', function (UserFactory, $http, $rootScope, $scope, OAuth, $state, config) {
		UserFactory.getProfile(function (response) {
			$scope.profile = response;
			$scope.config = config;
		});

		$rootScope.pageTitle = 'Votre profil';
		if ($state.current.data !== undefined && $state.current.data !== null)
			$rootScope.pageTitle = $state.current.data.pageTitle;
	}])
	.controller('UserController@show', ['UserFactory', '$http', '$rootScope', '$scope', '$stateParams', 'config', function (UserFactory, $http, $rootScope, $scope, $stateParams, config) {
		$scope.config = config;

		UserFactory.getUser($stateParams.id, function (response) {
			$scope.profile = response;

			$rootScope.pageTitle = 'Profil de ' + $scope.profile.firstname + ' ' + $scope.profile.lastname;
		});
	}])
	.controller('UserController@index', ['UserFactory', '$http', '$rootScope', '$scope', '$stateParams', 'config', function (UserFactory, $http, $rootScope, $scope, $stateParams, config) {
		$rootScope.pageTitle = "Liste des utilisateurs";

		UserFactory.getUsers(function (users) {
			$scope.users = users;
		});
	}])
	.controller('UserController@delete', ['$rootScope', '$scope', '$state', '$stateParams', 'UserFactory', function ($rootScope, $scope, $state, $stateParams, UserFactory) {
		UserFactory.deleteUser($stateParams.id, function () {
			$state.go('users.index');
		});
	}]);
