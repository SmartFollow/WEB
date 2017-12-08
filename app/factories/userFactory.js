angular.module('UsersModule')
	.factory('UserFactory', ['$http', 'OAuthToken', '$cookies', 'config', '$rootScope', function ($http, OAuthToken, $cookies, config, $rootScope) {
		return {
			getUser: function (id, callback, errorCallback) {
				$http({
					method: 'GET',
					url: config.apiUrl + "api/users/" + id
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
					url: config.apiUrl + "api/users/create"
				}).then(function successCallback(response) {
					callback(response.data);
				}, function (response) {
					if (errorCallback)
						errorCallback(response.data);
					else
						$rootScope.globalAlerts.push({ type: 'danger', text: 'Erreur lors du traitement de votre requête' });
				});
			},
			storeUser: function (data, callback, errorCallback) {
				$http({
					method: 'POST',
					url: config.apiUrl + "api/users",
					data: data,
					headers: {'Content-Type': undefined}
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
					url: config.apiUrl + "api/users/" + id + "/edit"
				}).then(function successCallback(response) {
					callback(response.data);
				}, function (response) {
					if (errorCallback)
						errorCallback(response.data);
					else
						$rootScope.globalAlerts.push({ type: 'danger', text: 'Erreur lors du traitement de votre requête' });
				});
			},
			updateUser: function (id, data, callback, errorCallback) {
				$http({
					method: 'PUT',
					url: config.apiUrl + "api/users/" + id,
					data: data,
					headers: {'Content-Type': undefined}
				}).then(function successCallback(response) {
					callback(response.data);
				}, function (response) {
					if (errorCallback)
						errorCallback(response.data);
					else
						$rootScope.globalAlerts.push({ type: 'danger', text: 'Erreur lors du traitement de votre requête' });
				});
			},
			deleteUser: function (id, callback, errorCallback) {
				$http({
					method: 'DELETE',
					url: config.apiUrl + "api/users/" + id
				}).then(function successCallback(response) {
					callback(response.data);
				}, function (response) {
					if (errorCallback)
						errorCallback(response.data);
					else
						$rootScope.globalAlerts.push({ type: 'danger', text: 'Erreur lors du traitement de votre requête' });
				});
			},
			getUsers: function (callback, errorCallback) {
				$http({
					method: 'GET',
					url: config.apiUrl + "api/users"
				}).then(function successCallback(response) {
					callback(response.data);
				}, function (response) {
					if (errorCallback)
						errorCallback(response.data);
					else
						$rootScope.globalAlerts.push({ type: 'danger', text: 'Erreur lors du traitement de votre requête' });
				});
			},
			getProfile: function (callback, errorCallback) {
				$http({
					method: 'GET',
					url: config.apiUrl + "api/users/profile"
				}).then(function successCallback(response) {
					callback(response.data);
				}, function (response) {
					if (errorCallback)
						errorCallback(response.data);
					else
						$rootScope.globalAlerts.push({ type: 'danger', text: 'Erreur lors du traitement de votre requête' });
				});
			},
			getUserAccessRules: function (callback, errorCallback) {
				$http({
					method: 'GET',
					url: config.apiUrl + "api/users/profile/access-rules"
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
	}
	]);
