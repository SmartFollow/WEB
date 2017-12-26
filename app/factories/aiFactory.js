angular.module('AIModule')
	.factory('AIFactory', ['$http', 'OAuth', 'config', '$rootScope', function ($http, OAuth, config, $rootScope) {
		return {
			runCriteriaStudentsSum: function (callback, errorCallback) {
				$http({
					method: 'GET',
					url: config.apiUrl + "api/ai/students/sum"
				}).then(function successCallback(response) {
					callback(response.data);
				}, function (response) {
					if (errorCallback)
						errorCallback(response.data);
					else
						$rootScope.globalAlerts.push({ type: 'danger', text: 'Erreur lors du traitement de votre requête' });
				});
			},
			runCriteriaStudentsAverage: function (callback, errorCallback) {
				$http({
					method: 'GET',
					url: config.apiUrl + "api/ai/students/average"
				}).then(function successCallback(response) {
					callback(response.data);
				}, function (response) {
					if (errorCallback)
						errorCallback(response.data);
					else
						$rootScope.globalAlerts.push({ type: 'danger', text: 'Erreur lors du traitement de votre requête' });
				});
			},
			runAbsenceDelaysStudents: function (callback, errorCallback) {
				$http({
					method: 'GET',
					url: config.apiUrl + "api/ai/students/absence-delay"
				}).then(function successCallback(response) {
					callback(response.data);
				}, function (response) {
					if (errorCallback)
						errorCallback(response.data);
					else
						$rootScope.globalAlerts.push({ type: 'danger', text: 'Erreur lors du traitement de votre requête' });
				});
			},
			runCriteriaClassesSum: function (callback, errorCallback) {
				$http({
					method: 'GET',
					url: config.apiUrl + "api/ai/classes/sum"
				}).then(function successCallback(response) {
					callback(response.data);
				}, function (response) {
					if (errorCallback)
						errorCallback(response.data);
					else
						$rootScope.globalAlerts.push({ type: 'danger', text: 'Erreur lors du traitement de votre requête' });
				});
			},
			runCriteriaClassesAverage: function (callback, errorCallback) {
				$http({
					method: 'GET',
					url: config.apiUrl + "api/ai/classes/average"
				}).then(function successCallback(response) {
					callback(response.data);
				}, function (response) {
					if (errorCallback)
						errorCallback(response.data);
					else
						$rootScope.globalAlerts.push({ type: 'danger', text: 'Erreur lors du traitement de votre requête' });
				});
			},
			runAbsenceDelaysClasses: function (callback, errorCallback) {
				$http({
					method: 'GET',
					url: config.apiUrl + "api/ai/classes/absence-delay"
				}).then(function successCallback(response) {
					callback(response.data);
				}, function (response) {
					if (errorCallback)
						errorCallback(response.data);
					else
						$rootScope.globalAlerts.push({ type: 'danger', text: 'Erreur lors du traitement de votre requête' });
				});
			},
			runCriteriaGivenSum: function (callback, errorCallback) {
				$http({
					method: 'GET',
					url: config.apiUrl + "api/ai/given/sum"
				}).then(function successCallback(response) {
					callback(response.data);
				}, function (response) {
					if (errorCallback)
						errorCallback(response.data);
					else
						$rootScope.globalAlerts.push({ type: 'danger', text: 'Erreur lors du traitement de votre requête' });
				});
			},
			runCriteriaGivenAverage: function (callback, errorCallback) {
				$http({
					method: 'GET',
					url: config.apiUrl + "api/ai/given/average"
				}).then(function successCallback(response) {
					callback(response.data);
				}, function (response) {
					if (errorCallback)
						errorCallback(response.data);
					else
						$rootScope.globalAlerts.push({ type: 'danger', text: 'Erreur lors du traitement de votre requête' });
				});
			},
			runAbsenceDelaysGiven: function (callback, errorCallback) {
				$http({
					method: 'GET',
					url: config.apiUrl + "api/ai/given/absence-delay"
				}).then(function successCallback(response) {
					callback(response.data);
				}, function (response) {
					if (errorCallback)
						errorCallback(response.data);
					else
						$rootScope.globalAlerts.push({ type: 'danger', text: 'Erreur lors du traitement de votre requête' });
				});
			},
			runAlerts: function (callback, errorCallback) {
				$http({
					method: 'GET',
					url: config.apiUrl + "api/ai/alerts"
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
