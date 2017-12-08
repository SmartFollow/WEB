angular.module('app')
	.controller('AppController@globalAlerts', ['$rootScope', '$scope', '$state', function ($rootScope, $scope, $state) {
		$scope.dismiss = function (index) {
			$rootScope.globalAlerts.splice(index, 1);
		};
	}]);