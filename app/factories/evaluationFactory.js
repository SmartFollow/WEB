angular.module('LessonsModule')
	.factory('EvaluationFactory', ['$http', 'OAuth', 'config', '$rootScope', function ($http, OAuth, config, $rootScope) {
		return {
			getCreateFormData: function (lessonId, callback, errorCallback) {
				$http({
					method: 'GET',
					url: config.apiUrl + "api/lessons/" + lessonId + "/evaluations/create"
				}).then(function successCallback(response) {
					callback(response.data);
				}, function (response) {
					if (errorCallback)
						errorCallback(response.data);
					else
						$rootScope.globalAlerts.push({ type: 'danger', text: 'Erreur lors du traitement de votre requête' });
				});
			},
			storeEvaluation: function (data, callback, errorCallback) {
				$http({
					method: 'POST',
					url: config.apiUrl + "api/evaluations",
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
			updateEvaluation: function (evaluationId, data, callback, errorCallback) {
				$http({
					method: 'PUT',
					url: config.apiUrl + "api/evaluations/" + evaluationId,
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
			storeAbsence: function (evaluationId, callback, errorCallback) {
				$http({
					method: 'POST',
					url: config.apiUrl + "api/evaluations/" + evaluationId + "/absences"
				}).then(function successCallback(response) {
					callback(response.data);
				}, function (response) {
					if (errorCallback)
						errorCallback(response.data);
					else
						$rootScope.globalAlerts.push({ type: 'danger', text: 'Erreur lors du traitement de votre requête' });
				});
			},
			storeDelay: function (evaluationId, callback, errorCallback) {
				$http({
					method: 'POST',
					url: config.apiUrl + "api/evaluations/" + evaluationId + "/delays"
				}).then(function successCallback(response) {
					callback(response.data);
				}, function (response) {
					if (errorCallback)
						errorCallback(response.data);
					else
						$rootScope.globalAlerts.push({ type: 'danger', text: 'Erreur lors du traitement de votre requête' });
				});
			},
			deleteDelay: function (evaluationId, delayId, callback, errorCallback) {
				$http({
					method: 'DELETE',
					url: config.apiUrl + "api/evaluations/" + evaluationId + "/delays/" + delayId
				}).then(function successCallback(response) {
					callback(response.data);
				}, function (response) {
					if (errorCallback)
						errorCallback(response.data);
					else
						$rootScope.globalAlerts.push({ type: 'danger', text: 'Erreur lors du traitement de votre requête' });
				});
			},
			storeCriterionEvaluation: function (evaluationId, data, callback, errorCallback) {
				$http({
					method: 'POST',
					url: config.apiUrl + "api/evaluations/" + evaluationId + "/criteria",
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
			updateCriterionEvaluation: function (evaluationId, criterionId, data, callback, errorCallback) {
				$http({
					method: 'PUT',
					url: config.apiUrl + "api/evaluations/" + evaluationId + "/criteria/" + criterionId,
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
