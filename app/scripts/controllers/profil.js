angular.module('app')
.controller('profil', ['users', '$http', '$rootScope', '$scope', 'OAuth', '$state', 'config', function(users, $http, $rootScope, $scope, OAuth, $state, config) {
	users.getUserFromData(function (response) {
		$scope.profile = response;
		$scope.config = config;
	});

    $rootScope.pageTitle = 'Votre profil';
    if ($state.current.data != null)
    	$rootScope.pageTitle = $state.current.data.pageTitle;
}])
.controller('profilId', ['users', '$http', '$rootScope', '$scope', '$stateParams', 'config', function(users, $http, $rootScope, $scope, $stateParams, config) {
	$scope.config = config;
	console.log($stateParams.id);

	users.getUserById($stateParams.id, function (response) {
		$scope.profile = response;

		$rootScope.pageTitle = 'Profil de ' + $scope.profile.firstname + ' ' + $scope.profile.lastname;
	});
}]);