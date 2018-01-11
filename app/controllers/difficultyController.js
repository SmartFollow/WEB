angular.module('DifficultiesModule')
	.controller('DifficultyController@index', ['$rootScope', '$scope', '$state', 'DifficultyFactory', function ($rootScope, $scope, $state, DifficultyFactory) {
		$rootScope.pageTitle = "Étudiants en difficulté";

		DifficultyFactory.getDifficulties(function (data) {
			$scope.difficulties = data.difficulties;
			$scope.self_difficulties = data.self_difficulties;
		});
	}]);
