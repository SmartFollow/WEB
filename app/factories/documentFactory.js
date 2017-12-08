angular.module('DocumentsModule')
	.factory('DocumentFactory', ['$http', 'OAuth', 'config', '$rootScope', function ($http, OAuth, config, $rootScope) {
		return {
			storeDocument: function (lessonId, data, callback, errorCallback) {
				$http({
					method: 'POST',
					url: config.apiUrl + "api/lessons/" + lessonId + "/documents",
					data: data,
					headers: { 'Content-Type': undefined }
				}).then(function successCallback(response) {
					callback(response.data);
				}, function (response) {
					if (errorCallback)
						errorCallback(response.data);
					else
						$rootScope.globalAlerts.push({ type: 'danger', text: 'Erreur lors du traitement de votre requête' });
				});
			},
			updateDocument: function (homeworkId, data, callback, errorCallback) {
				$http({
					method: 'PUT',
					url: config.apiUrl + "api/documents/" + homeworkId,
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
			deleteDocument: function (homeworkId, callback, errorCallback) {
				$http({
					method: 'DELETE',
					url: config.apiUrl + "api/documents/" + homeworkId
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
