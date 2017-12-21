angular.module('AbsencesModule')
	.factory('AbsenceFactory', ['$http', 'OAuth', 'config', '$rootScope', function ($http, OAuth, config, $rootScope) {
		return {
			getAbsences: function (callback, errorCallback) {
				$http({
					method: 'GET',
					url: config.apiUrl + "api/absences"
				}).then(function successCallback(response) {
					callback(response.data);
				}, function (response) {
					if (errorCallback)
						errorCallback(response.data);
					else
						$rootScope.globalAlerts.push({ type: 'danger', text: 'Erreur lors du traitement de votre requête' });
				});
			},
			updateAbsence: function (absenceId, data, callback, errorCallback) {
				$http({
					method: 'PUT',
					url: config.apiUrl + "api/absences/" + absenceId,
					data: data
				}).then(function successCallback(response) {
					callback(response.data);
				}, function (response) {
					if (errorCallback)
						errorCallback(response.data);
					else
						$rootScope.globalAlerts.push({ type: 'danger', text: 'Erreur lors du traitement de votre requête' });
				});
			}
		};
	}]);
