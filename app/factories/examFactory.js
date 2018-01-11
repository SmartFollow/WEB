angular.module('ExamsModule')
	.factory('ExamFactory', ['$http', 'OAuth', 'config', '$rootScope', function ($http, OAuth, config, $rootScope) {
		return {
			storeExam: function (lessonId, data, callback, errorCallback) {
				$http({
					method: 'POST',
					url: config.apiUrl + "api/lessons/" + lessonId + "/exam",
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
			updateExam: function (examId, data, callback, errorCallback) {
				$http({
					method: 'PUT',
					url: config.apiUrl + "api/exams/" + examId,
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
			deleteExam: function (examId, callback, errorCallback) {
				$http({
					method: 'DELETE',
					url: config.apiUrl + "api/exams/" + examId
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
