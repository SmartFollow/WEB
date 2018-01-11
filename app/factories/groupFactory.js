angular.module('GroupsModule')
	.factory('GroupFactory', ['$http', 'OAuth', 'config', '$rootScope', function ($http, OAuth, config, $rootScope) {
		return {
			getGroups: function (callback, errorCallback) {
				$http({
					method: 'GET',
					url: config.apiUrl + "api/groups"
				}).then(function successCallback(response) {
					callback(response.data);
				}, function (response) {
					if (errorCallback)
						errorCallback(response.data);
					else
						$rootScope.globalAlerts.push({ type: 'danger', text: 'Erreur lors du traitement de votre requête' });
				});
			},
			getGroup: function (id, callback, errorCallback) {
				$http({
					method: 'GET',
					url: config.apiUrl + "api/groups/" + id
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
					url: config.apiUrl + "api/groups/create"
				}).then(function successCallback(response) {
					callback(response.data);
				}, function (response) {
					if (errorCallback)
						errorCallback(response.data);
					else
						$rootScope.globalAlerts.push({ type: 'danger', text: 'Erreur lors du traitement de votre requête' });
				});
			},
			storeGroup: function (data, callback, errorCallback) {
				$http({
					method: 'POST',
					url: config.apiUrl + "api/groups",
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
					url: config.apiUrl + "api/groups/" + id + "/edit"
				}).then(function successCallback(response) {
					callback(response.data);
				}, function (response) {
					if (errorCallback)
						errorCallback(response.data);
					else
						$rootScope.globalAlerts.push({ type: 'danger', text: 'Erreur lors du traitement de votre requête' });
				});
			},
			updateGroup: function (id, data, callback, errorCallback) {
				$http({
					method: 'PUT',
					url: config.apiUrl + "api/groups/" + id,
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
			deleteGroup: function (id, callback, errorCallback) {
				$http({
					method: 'DELETE',
					url: config.apiUrl + "api/groups/" + id
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
