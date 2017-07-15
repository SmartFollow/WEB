angular.module('app').controller('user', ['users', '$http', '$rootScope', '$scope', 'OAuth', '$state', 'config', function(users, $http, $rootScope, $scope, OAuth, $state, config) {
	if (!OAuth.isAuthenticated())
    	$state.go('login');
    else {
    	users.getUserFromData(function (response) {
			$rootScope.user = response;
		});
	}
}]);