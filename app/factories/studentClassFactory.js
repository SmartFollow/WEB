angular.module('StudentClassesModule')
	.factory('StudentClassFactory', ['$http', 'OAuth', 'config', '$rootScope', function ($http, OAuth, config, $rootScope) {
		return {
			getStudentClasses: function (callback, errorCallback) {
				$http({
					method: 'GET',
					url: config.apiUrl + "api/student-classes"
				}).then(function successCallback(response) {
					callback(response.data);
				}, function (response) {
					if (errorCallback)
						errorCallback(response.data);
					else
						$rootScope.globalAlerts.push({ type: 'danger', text: 'Erreur lors du traitement de votre requête' });
				});
			},
			getStudentClass: function (id, callback, errorCallback) {
				$http({
					method: 'GET',
					url: config.apiUrl + "api/student-classes/" + id
				}).then(function successCallback(response) {
					callback(response.data);
				}, function (response) {
					if (errorCallback)
						errorCallback(response.data);
					else
						$rootScope.globalAlerts.push({ type: 'danger', text: 'Erreur lors du traitement de votre requête' });
				});
			}
		}
	}]);