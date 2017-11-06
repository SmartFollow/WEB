angular.module('RoomsModule')
	.factory('RoomFactory', ['$http', 'OAuth', 'config', function ($http, OAuth, config) {
		return {
			getRooms: function (callback) {
				$http({
					method: 'GET',
					url: config.apiUrl + "api/rooms"
				}).then(function successCallback(response) {
					callback(response.data);
				}, function errorCallback(response) {
					console.log(response);
				});
			},
			storeRoom: function (data, callback) {
				$http({
					method: 'POST',
					url: config.apiUrl + "api/rooms",
					data: data
				}).then(function successCallback(response) {
					callback(response.data);
				}, function errorCallback(response) {
					console.log(response);
				});
			},
			getEditFormData: function (id, callback) {
				$http({
					method: 'GET',
					url: config.apiUrl + "api/rooms/" + id + "/edit"
				}).then(function successCallback(response) {
					callback(response.data);
				}, function errorCallback(response) {
					console.log(response);
				});
			},
			updateRoom: function (id, data, callback) {
				$http({
					method: 'PUT',
					url: config.apiUrl + "api/rooms/" + id,
					data: data
				}).then(function successCallback(response) {
					callback(response.data);
				}, function errorCallback(response) {
					console.log(response);
				});
			},
			deleteRoom: function (id, callback) {
				$http({
					method: 'DELETE',
					url: config.apiUrl + "api/rooms/" + id
				}).then(function successCallback(response) {
					callback(response.data);
				}, function errorCallback(response) {
					console.log(response);
				});
			}
		};
	}]);
