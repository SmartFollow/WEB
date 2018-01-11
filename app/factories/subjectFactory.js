angular.module('SubjectsModule')
	.factory('SubjectFactory', ['$http', 'OAuth', 'config', '$rootScope', function ($http, OAuth, config, $rootScope) {
		return {
			getSubjects: function(callback, errorCallback) {
				$http({
					method: 'GET',
					url: config.apiUrl + "api/subjects"
				}).then(function successCallback(response) {
					callback(response.data);
				}, function (response) {
					if (errorCallback)
						errorCallback(response.data);
					else
						$rootScope.globalAlerts.push({ type: 'danger', text: 'Erreur lors du traitement de votre requête' });
				});
			},
			getSubject: function(id, callback, errorCallback) {
				$http({
					method: 'GET',
					url: config.apiUrl + "api/subjects/" + id
				}).then(function successCallback(response) {
					callback(response.data);
				}, function (response) {
					if (errorCallback)
						errorCallback(response.data);
					else
						$rootScope.globalAlerts.push({ type: 'danger', text: 'Erreur lors du traitement de votre requête' });
				});
			},
			getCreateSubject: function(callback, errorCallback) {
				$http({
					method: 'GET',
					url: config.apiUrl + "api/subjects/create"
				}).then(function successCallback(response) {
					callback(response.data);
				}, function (response) {
					if (errorCallback)
						errorCallback(response.data);
					else
						$rootScope.globalAlerts.push({ type: 'danger', text: 'Erreur lors du traitement de votre requête' });
				});
			},
			createSubject: function(data, callback, errorCallback) {
				$http({
					method: 'POST',
					url: config.apiUrl + "api/subjects",
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
			updateSubject: function(id, data, callback, errorCallback) {
				$http({
					method: 'PUT',
					url: config.apiUrl + "api/subjects/" + id,
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
			deleteSubject: function(id, callback, errorCallback) {
				$http({
					method: 'DELETE',
					url: config.apiUrl + "api/subjects/" + id
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