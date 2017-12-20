angular.module('ProcessesModule')
	.factory('ProcessFactory', ['$http', 'OAuth', 'config', '$rootScope', function ($http, OAuth, config, $rootScope) {
		return {
			getProcesses: function (callback, errorCallback) {
				$http({
					method: 'GET',
					url: config.apiUrl + "api/processes"
				}).then(function successCallback(response) {
					callback(response.data);
				}, function (response) {
					if (errorCallback)
						errorCallback(response.data);
					else
						$rootScope.globalAlerts.push({ type: 'danger', text: 'Erreur lors du traitement de votre requête' });
				});
			},
			getUserProcesses: function (userId, callback, errorCallback) {
				$http({
					method: 'GET',
					url: config.apiUrl + "api/users/" + userId + "/processes"
				}).then(function successCallback(response) {
					callback(response.data);
				}, function (response) {
					if (errorCallback)
						errorCallback(response.data);
					else
						$rootScope.globalAlerts.push({ type: 'danger', text: 'Erreur lors du traitement de votre requête' });
				});
			},
			updateUserProcess: function (data, callback, errorCallback) {
				$http({
					method: 'PUT',
					url: config.apiUrl + "api/processes-users",
					data: data
				}).then(function successCallback(response) {
					callback(response.data);
				}, function (response) {
					if (errorCallback)
						errorCallback(response.data);
					else
						$rootScope.globalAlerts.push({ type: 'danger', text: 'Erreur lors du traitement de votre requête' });
				});
			},
			storeUserProcess: function (data, callback, errorCallback) {
				$http({
					method: 'POST',
					url: config.apiUrl + "api/processes-users",
					data: data
				}).then(function successCallback(response) {
					callback(response.data);
				}, function (response) {
					if (errorCallback)
						errorCallback(response.data);
					else
						$rootScope.globalAlerts.push({ type: 'danger', text: 'Erreur lors du traitement de votre requête' });
				});
			},
			deleteUserProcess: function (userId, processId, callback, errorCallback) {
				$http({
					method: 'DELETE',
					url: config.apiUrl + "api/users/" + userId + "/processes/" + processId
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
