angular.module('UsersModule')
	.controller('UserController@profile', ['UserFactory', '$http', '$rootScope', '$scope', 'OAuth', '$state', 'config', function (UserFactory, $http, $rootScope, $scope, OAuth, $state, config) {
		UserFactory.getUserFromData(function (response) {
			$scope.profile = response;
			$scope.config = config;
		});

		$rootScope.pageTitle = 'Votre profil';
		if ($state.current.data !== undefined && $state.current.data !== null)
			$rootScope.pageTitle = $state.current.data.pageTitle;
	}])
	.controller('UserController@show', ['UserFactory', '$http', '$rootScope', '$scope', '$stateParams', 'config', function (UserFactory, $http, $rootScope, $scope, $stateParams, config) {
		$scope.config = config;

		UserFactory.getUserById($stateParams.id, function (response) {
			$scope.profile = response;

			$rootScope.pageTitle = 'Profil de ' + $scope.profile.firstname + ' ' + $scope.profile.lastname;
		});
	}]);