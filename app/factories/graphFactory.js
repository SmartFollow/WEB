angular.module('GraphsModule')
	.factory('GraphFactory', ['$http', 'OAuth', 'config', '$rootScope', function ($http, OAuth, config, $rootScope, $rootScope) {
		return {
			getGraphs: function (callback, errorCallback) {
				$http({
					method: 'GET',
					url: config.apiUrl + "api/graphs"
				}).then(function successCallback(response) {
					callback(response.data);
				}, function (response) {
					if (errorCallback)
						errorCallback(response.data);
					else
						$rootScope.globalAlerts.push({ type: 'danger', text: 'Erreur lors du traitement de votre requête' });
				});
			},
			getProfileGraphs: function (callback, errorCallback) {
				$http({
					method: 'GET',
					url: config.apiUrl + "api/users/profile/graphs"
				}).then(function successCallback(response) {
					callback(response.data);
				}, function (response) {
					if (errorCallback)
						errorCallback(response.data);
					else
						$rootScope.globalAlerts.push({ type: 'danger', text: 'Erreur lors du traitement de votre requête' });
				});
			},
			getUserGraphs: function (userId, callback, errorCallback) {
				$http({
					method: 'GET',
					url: config.apiUrl + "api/users/" + userId + "/graphs"
				}).then(function successCallback(response) {
					callback(response.data);
				}, function (response) {
					if (errorCallback)
						errorCallback(response.data);
					else
						$rootScope.globalAlerts.push({ type: 'danger', text: 'Erreur lors du traitement de votre requête' });
				});
			},
			getGraph: function (id, callback, errorCallback) {
				$http({
					method: 'GET',
					url: config.apiUrl + "api/graphs/" + id
				}).then(function successCallback(response) {
					callback(response.data);
				}, function (response) {
					if (errorCallback)
						errorCallback(response.data);
					else
						$rootScope.globalAlerts.push({ type: 'danger', text: 'Erreur lors du traitement de votre requête' });
				});
			},
			getCreateFormData: function (callback, errorCallback) {
				$http({
					method: 'GET',
					url: config.apiUrl + "api/graphs/create"
				}).then(function successCallback(response) {
					callback(response.data);
				}, function (response) {
					if (errorCallback)
						errorCallback(response.data);
					else
						$rootScope.globalAlerts.push({ type: 'danger', text: 'Erreur lors du traitement de votre requête' });
				});
			},
			storeGraph: function (data, callback, errorCallback) {
				$http({
					method: 'POST',
					url: config.apiUrl + "api/graphs",
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
			getEditFormData: function (id, callback, errorCallback) {
				$http({
					method: 'GET',
					url: config.apiUrl + "api/graphs/" + id + "/edit"
				}).then(function successCallback(response) {
					callback(response.data);
				}, function (response) {
					if (errorCallback)
						errorCallback(response.data);
					else
						$rootScope.globalAlerts.push({ type: 'danger', text: 'Erreur lors du traitement de votre requête' });
				});
			},
			updateGraph: function (id, data, callback, errorCallback) {
				$http({
					method: 'PUT',
					url: config.apiUrl + "api/graphs/" + id,
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
			deleteGraph: function (id, callback, errorCallback) {
				$http({
					method: 'DELETE',
					url: config.apiUrl + "api/graphs/" + id
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
