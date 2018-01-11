angular.module('LessonsModule')
	.factory('LessonFactory', ['$http', 'OAuth', 'config', '$rootScope', function ($http, OAuth, config, $rootScope) {
		return {
			getLesson: function (id, callback, errorCallback) {
				$http({
					method: 'GET',
					url: config.apiUrl + "api/lessons/" + id
				}).then(function successCallback(response) {
					callback(response.data);
				}, function (response) {
					if (errorCallback)
						errorCallback(response.data);
					else
						$rootScope.globalAlerts.push({ type: 'danger', text: 'Erreur lors du traitement de votre requête' });
				});
			},
		};
	}]);
