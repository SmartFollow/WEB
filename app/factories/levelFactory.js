angular.module('LevelsModule')
    .factory('LevelFactory', ['$http', 'OAuth', 'config', '$rootScope', function ($http, OAuth, config, $rootScope) {
        return {
            getLevels: function (callback, errorCallback) {
                $http({
                    method: 'GET',
                    url: config.apiUrl + "api/levels"
                }).then(function successCallback(response) {
                    callback(response.data);
                }, function (response) {
	                if (errorCallback)
		                errorCallback(response.data);
	                else
		                $rootScope.globalAlerts.push({ type: 'danger', text: 'Erreur lors du traitement de votre requête' });
                });
            },
            storeLevel: function (data, callback, errorCallback) {
                $http({
                    method: 'POST',
                    url: config.apiUrl + "api/levels",
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
                    url: config.apiUrl + "api/levels/" + id + "/edit"
                }).then(function successCallback(response) {
                    callback(response.data);
                }, function (response) {
	                if (errorCallback)
		                errorCallback(response.data);
	                else
		                $rootScope.globalAlerts.push({ type: 'danger', text: 'Erreur lors du traitement de votre requête' });
                });
            },
            updateLevel: function (id, data, callback, errorCallback) {
                $http({
                    method: 'PUT',
                    url: config.apiUrl + "api/levels/" + id,
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
            deleteLevel: function (id, callback, errorCallback) {
                $http({
                    method: 'DELETE',
                    url: config.apiUrl + "api/levels/" + id
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