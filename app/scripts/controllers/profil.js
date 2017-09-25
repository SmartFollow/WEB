angular.module('app').controller('profil', ['users', '$http', '$rootScope', '$scope', 'OAuth', '$state', 'config', function(users, $http, $rootScope, $scope, OAuth, $state, config) {
	users.getUserFromData(function (response) {
		if ($rootScope.user.id != 4)
			$rootScope.showEval = false;
		else
			$rootScope.showEval = true;
	});
    // Get profile
	users.getUserFromData(function (response) {
		$scope.profile = response;
		$scope.config = config;
	});

    $rootScope.pageTitle = 'Votre profil';
    if ($state.current.data != null)
    	$rootScope.pageTitle = $state.current.data.pageTitle;
}])
.controller('profilId', ['users', '$http', '$rootScope', '$scope', '$stateParams', 'OAuth', function(users, $http, $rootScope, $scope, $stateParams, OAuth) {
	users.getUsersFromData(function (response) {
		$rootScope.user = response;
    	var tmpUser = users.getUserById($stateParams.id);
    	$rootScope.pageTitle = 'Profil de ' + tmpUser.firstname + ' ' + tmpUser.lastname;
    	$scope.user = tmpUser;
    	$scope.profile = tmpUser;
		$scope.imgUser = config.apiUrl + tmpUser.avatar;
    })
}]);