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
			},
			storeStudentClass: function (data, callback, errorCallback) {
				$http({
					method: 'POST',
					url: config.apiUrl + "api/student-classes",
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
			getStoreStudentClass: function (callback, errorCallback) {
				$http({
					method: 'GET',
					url: config.apiUrl + "api/student-classes/create"
				}).then(function successCallback(response) {
					callback(response.data);
				}, function (response) {
					if (errorCallback)
						errorCallback(response.data);
					else
						$rootScope.globalAlerts.push({ type: 'danger', text: 'Erreur lors du traitement de votre requête' });
				});
			},
			getUpdateStudentClass: function (id, callback, errorCallback) {
				$http({
					method: 'GET',
					url: config.apiUrl + "api/student-classes/" + id + "/edit"
				}).then(function successCallback(response) {
					callback(response.data);
				}, function (response) {
					if (errorCallback)
						errorCallback(response.data);
					else
						$rootScope.globalAlerts.push({ type: 'danger', text: 'Erreur lors du traitement de votre requête' });
				});
			},
			updateStudents: function (id, data, callback, errorCallback) {
				$http({
					method: 'PUT',
					url: config.apiUrl + "api/student-classes/" + id + "/students",
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
			updateSubjects: function (id, data, callback, errorCallback) {
				$http({
					method: 'PUT',
					url: config.apiUrl + "api/student-classes/" + id + "/subjects",
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
			updateStudentClass: function (id, data, callback, errorCallback) {
				$http({
					method: 'PUT',
					url: config.apiUrl + "api/student-classes/" + id,
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
			deleteStudentClass: function (id, callback, errorCallback) {
				$http({
					method: 'DELETE',
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
