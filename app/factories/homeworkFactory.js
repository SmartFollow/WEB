angular.module('HomeworksModule')
	.factory('HomeworkFactory', ['$http', 'OAuth', 'config', '$rootScope', function ($http, OAuth, config, $rootScope) {
		return {
			storeHomework: function (lessonId, data, callback, errorCallback) {
				$http({
					method: 'POST',
					url: config.apiUrl + "api/lessons/" + lessonId + "/homeworks",
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
			updateHomework: function (lessonId, homeworkId, data, callback, errorCallback) {
				$http({
					method: 'PUT',
					url: config.apiUrl + "api/lessons/" + lessonId + "/homeworks/" + homeworkId,
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
			deleteHomework: function (lessonId, homeworkId, callback, errorCallback) {
				$http({
					method: 'DELETE',
					url: config.apiUrl + "api/lessons/" + lessonId + "/homeworks/" + homeworkId
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
