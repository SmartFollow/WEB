angular.module('StudentClassesModule')
	.factory('StudentClassFactory', ['$http', 'OAuth', 'config', function ($http, OAuth, config) {
		return {
			getStudentClasses: function (callback) {
				$http({
					method: 'GET',
					url: config.apiUrl + "api/student-classes"
				}).then(function successCallback(response) {
					callback(response.data);
				}, function errorCallback(response) {
					console.log(response);
				});
			},
			getStudentClass: function (id, callback) {
				$http({
					method: 'GET',
					url: config.apiUrl + "api/student-classes/" + id
				}).then(function successCallback(response) {
					callback(response.data);
				}, function errorCallback(response) {
					console.log(response);
				});
			}
		}
	}]);