angular.module('AIModule')
	.factory('AIFactory', ['$http', 'OAuth', 'config', function ($http, OAuth, config) {
		return {
			runCriteriaStudentsSum: function (callback) {
				$http({
					method: 'GET',
					url: config.apiUrl + "api/ai/students/sum"
				}).then(function successCallback(response) {
					callback(response.data);
				}, function errorCallback(response) {
					console.log(response);
				});
			},
			runCriteriaStudentsAverage: function (callback) {
				$http({
					method: 'GET',
					url: config.apiUrl + "api/ai/students/average"
				}).then(function successCallback(response) {
					callback(response.data);
				}, function errorCallback(response) {
					console.log(response);
				});
			},
			runAbsenceDelaysStudents: function (callback) {
				$http({
					method: 'GET',
					url: config.apiUrl + "api/ai/students/absence-delay"
				}).then(function successCallback(response) {
					callback(response.data);
				}, function errorCallback(response) {
					console.log(response);
				});
			},
			runCriteriaClassesSum: function (callback) {
				$http({
					method: 'GET',
					url: config.apiUrl + "api/ai/classes/sum"
				}).then(function successCallback(response) {
					callback(response.data);
				}, function errorCallback(response) {
					console.log(response);
				});
			},
			runCriteriaClassesAverage: function (callback) {
				$http({
					method: 'GET',
					url: config.apiUrl + "api/ai/classes/average"
				}).then(function successCallback(response) {
					callback(response.data);
				}, function errorCallback(response) {
					console.log(response);
				});
			},
			runAbsenceDelaysClasses: function (callback) {
				$http({
					method: 'GET',
					url: config.apiUrl + "api/ai/classes/absence-delay"
				}).then(function successCallback(response) {
					callback(response.data);
				}, function errorCallback(response) {
					console.log(response);
				});
			},
			runCriteriaGivenSum: function (callback) {
				$http({
					method: 'GET',
					url: config.apiUrl + "api/ai/given/sum"
				}).then(function successCallback(response) {
					callback(response.data);
				}, function errorCallback(response) {
					console.log(response);
				});
			},
			runCriteriaGivenAverage: function (callback) {
				$http({
					method: 'GET',
					url: config.apiUrl + "api/ai/given/average"
				}).then(function successCallback(response) {
					callback(response.data);
				}, function errorCallback(response) {
					console.log(response);
				});
			},
			runAbsenceDelaysGiven: function (callback) {
				$http({
					method: 'GET',
					url: config.apiUrl + "api/ai/given/absence-delay"
				}).then(function successCallback(response) {
					callback(response.data);
				}, function errorCallback(response) {
					console.log(response);
				});
			},
		};
	}]);
