angular.module('DifficultiesModule')
	.factory('DifficultyFactory', ['$http', 'OAuth', 'config', '$rootScope', function ($http, OAuth, config, $rootScope) {
		return {
			getDifficulties: function (callback, errorCallback) {
				$http({
					method: 'GET',
					url: config.apiUrl + "api/difficulties"
				}).then(function successCallback(response) {
					callback(response.data);
				}, function (response) {
					if (errorCallback)
						errorCallback(response.data);
					else
						$rootScope.globalAlerts.push({ type: 'danger', text: 'Erreur lors du traitement de votre requête' });
				});
			},
		};
	}]);
