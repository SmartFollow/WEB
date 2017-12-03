angular.module('LessonsModule')
	.factory('EvaluationFactory', ['$http', 'OAuth', 'config', function ($http, OAuth, config) {
		return {
			getCreateFormData: function (lessonId, callback) {
				$http({
					method: 'GET',
					url: config.apiUrl + "api/lessons/" + lessonId + "/evaluations/create"
				}).then(function successCallback(response) {
					callback(response.data);
				}, function errorCallback(response) {
					console.log(response);
				});
			},
			storeEvaluation: function (data, callback) {
				$http({
					method: 'POST',
					url: config.apiUrl + "api/evaluations",
					data: data
				}).then(function successCallback(response) {
					callback(response.data);
				}, function errorCallback(response) {
					console.log(response);
				});
			},
			storeAbsence: function (evaluationId, callback) {
				$http({
					method: 'POST',
					url: config.apiUrl + "api/evaluations/" + evaluationId + "/absences"
				}).then(function successCallback(response) {
					callback(response.data);
				}, function errorCallback(response) {
					console.log(response);
				});
			},
			storeDelay: function (evaluationId, callback) {
				$http({
					method: 'POST',
					url: config.apiUrl + "api/evaluations/" + evaluationId + "/delays"
				}).then(function successCallback(response) {
					callback(response.data);
				}, function errorCallback(response) {
					console.log(response);
				});
			},
			deleteDelay: function (evaluationId, delayId, callback) {
				$http({
					method: 'DELETE',
					url: config.apiUrl + "api/evaluations/" + evaluationId + "/delays/" + delayId
				}).then(function successCallback(response) {
					callback(response.data);
				}, function errorCallback(response) {
					console.log(response);
				});
			},
			storeCriterionEvaluation: function (evaluationId, data, callback) {
				$http({
					method: 'POST',
					url: config.apiUrl + "api/evaluations/" + evaluationId + "/criteria",
					data: data
				}).then(function successCallback(response) {
					callback(response.data);
				}, function errorCallback(response) {
					console.log(response);
				});
			},
			updateCriterionEvaluation: function (evaluationId, criterionId, data, callback) {
				$http({
					method: 'PUT',
					url: config.apiUrl + "api/evaluations/" + evaluationId + "/criteria/" + criterionId,
					data: data
				}).then(function successCallback(response) {
					callback(response.data);
				}, function errorCallback(response) {
					console.log(response);
				});
			}
		};
	}]);
