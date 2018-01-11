angular.module('ExamsModule')
	.factory('MarkFactory', ['$http', 'OAuth', 'config', '$rootScope', function ($http, OAuth, config, $rootScope) {
		return {
			storeMark: function (examId, data, callback, errorCallback) {
				$http({
					method: 'POST',
					url: config.apiUrl + "api/exams/" + examId + "/marks",
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
			updateMark: function (examId, markId, data, callback, errorCallback) {
				$http({
					method: 'PUT',
					url: config.apiUrl + "api/exams/" + examId + "/marks/" + markId,
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
