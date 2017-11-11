angular.module('StudentClassesModule')
	.controller('StudentClassController@show', ['$scope', '$rootScope', '$stateParams', 'config', 'StudentClassFactory', function ($scope, $rootScope, $stateParams, config, StudentClassFactory) {
		$rootScope.pageTitle = "Affichage d'une classe";
		$scope.config = config;

		StudentClassFactory.getStudentClass($stateParams.id, function (data) {
			$scope.class = data;
			$rootScope.pageTitle = "Affichage d'une classe : " + $scope.class.name;
		});
	}]);
