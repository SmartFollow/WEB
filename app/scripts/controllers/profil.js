angular.module('app').controller('profil', ['users', '$http', '$rootScope', '$scope', 'OAuth', '$state', 'OAuth', function(users, $http, $rootScope, $scope, OAuth, $state) {
	if (!OAuth.isAuthenticated())
    	$state.go('login');
    else {
    	users.getUserFromData(function (response) {
			$rootScope.user = response;
			if ($rootScope.user.id != 4)
    			$rootScope.showEval = false;
    		else
    			$rootScope.showEval = true;
		})
    }
    $scope.imgUser = "/app/images/profil 2/bechad_p.bmp";
    $rootScope.pageTitle = 'Votre profil';
    if ($state.current.data != null)
    	$rootScope.pageTitle = $state.current.data.pageTitle;
}])
.controller('profilId', ['users', '$http', '$rootScope', '$scope', '$stateParams', 'OAuth', function(users, $http, $rootScope, $scope, $stateParams, OAuth) {
	if (!OAuth.isAuthenticated())
    	$state.go('login');
    else {
    	users.getUserFromData(function (response) {
			$rootScope.user = response;
	    	var tmpUser = users.getUserById($stateParams.id);
	    	$rootScope.pageTitle = 'Profil de ' + tmpUser.firstname + ' ' + tmpUser.lastname;
	    	$scope.user = tmpUser;
	    	$scope.imgUser = "/app/images/profil 2/bechad_p.bmp";
	    	if (tmpUser.id == 5)
	    		$scope.imgUser = "/app/images/profil 2/diafou_j.bmp";
	    	else if (tmpUser.id == 6)
	    		$scope.imgUser = "/app/images/profil 2/rio_s.bmp";
	    })
    }
}]);