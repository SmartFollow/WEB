angular.module('GroupsModule')
	.controller('GroupController@index', ['$http', '$rootScope', '$scope', 'OAuth', '$state', 'config', 'GroupFactory', function ($http, $rootScope, $scope, OAuth, $state, config, GroupFactory) {
		$scope.config = config;
		$rootScope.pageTitle = "Groupes d'utilisateurs";

		GroupFactory.getGroups(function (data) {
			$scope.groups = data;
		});
	}]);
