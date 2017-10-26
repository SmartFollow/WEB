angular.module('app')
	.controller('GroupController', ['$http', '$rootScope', '$scope', 'OAuth', '$state', 'config', 'GroupFactory', function ($http, $rootScope, $scope, OAuth, $state, config, GroupFactory) {
		$scope.config = config;
		$rootScope.pageTitle = "Groupes d'utilisateurs";

	}]);