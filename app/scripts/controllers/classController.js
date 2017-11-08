angular.module('app')
.controller('classController@show', ['$scope', '$state', '$rootScope', '$http', '$filter', '$stateParams', 'config', function ($scope, $state, $rootScope, $http, $filter, $stateParams, config) {
	$scope.config = config;

	$http({
		method: 'GET',
		url: config.apiUrl + "api/student-classes/" + $stateParams.id
	}).then(function successCallback(response) {
		$scope.class = response.data;
		$rootScope.pageTitle = $scope.class.name;
	}, function errorCallback(response) {
		console.log(response);
		alert("Sorry, the class you are looking for could not be found.");
		$state.go('profil');
	});
}]);