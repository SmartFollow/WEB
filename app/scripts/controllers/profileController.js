angular.module('app')
	.controller('ProfileController', ['UserFactory', '$http', '$rootScope', '$scope', 'OAuth', '$state', 'config', function (UserFactory, $http, $rootScope, $scope, OAuth, $state, config) {
		UserFactory.getUserFromData(function (response) {
			$scope.profile = response;
			$scope.config = config;
			console.log($rootScope.accessRules);
		});

		$rootScope.pageTitle = 'Votre profil';
		if ($state.current.data !== undefined && $state.current.data !== null)
			$rootScope.pageTitle = $state.current.data.pageTitle;
	}])
	.controller('profilId', ['UserFactory', '$http', '$rootScope', '$scope', '$stateParams', 'config', function (UserFactory, $http, $rootScope, $scope, $stateParams, config) {
		$scope.config = config;
		console.log($stateParams.id);

		UserFactory.getUserById($stateParams.id, function (response) {
			$scope.profile = response;

			$rootScope.pageTitle = 'Profil de ' + $scope.profile.firstname + ' ' + $scope.profile.lastname;
		});
	}]);