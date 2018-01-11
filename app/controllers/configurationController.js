angular.module('app')
	.controller('ConfigurationController@index', ['$rootScope', '$scope', '$state', 'UserFactory', function ($rootScope, $scope, $state, UserFactory) {
		$rootScope.pageTitle = "Configuration";

		$scope.newPassword = null;

		$scope.updatePassword = function () {
			UserFactory.updateProfilePassword({
				password: $scope.newPassword
			}, function (user) {
				$rootScope.globalAlerts.push({ type: 'success', text: 'Votre mot de passe a bien été modifié.' });
			});
		}
	}]);