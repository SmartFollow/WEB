angular.module('LevelsModule')
    .factory('LevelFactory', ['$http', 'OAuth', 'config', function ($http, OAuth, config) {
        return {
            getLevels: function (callback) {
                $http({
                    method: 'GET',
                    url: config.apiUrl + "api/levels"
                }).then(function successCallback(response) {
                    callback(response.data);
                }, function errorCallback(response) {
                    console.log(response);
                });
            },
            storeLevel: function (data, callback) {
                $http({
                    method: 'POST',
                    url: config.apiUrl + "api/levels",
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
                    url: config.apiUrl + "api/levels/" + id + "/edit"
                }).then(function successCallback(response) {
                    callback(response.data);
                }, function errorCallback(response) {
                    console.log(response);
                });
            },
            updateLevel: function (id, data, callback) {
                $http({
                    method: 'PUT',
                    url: config.apiUrl + "api/levels/" + id,
                    data: data
                }).then(function successCallback(response) {
                    callback(response.data);
                }, function errorCallback(response) {
                    console.log(response);
                });
            },
            deleteLevel: function (id, callback) {
                $http({
                    method: 'DELETE',
                    url: config.apiUrl + "api/levels/" + id
                }).then(function successCallback(response) {
                    callback(response.data);
                }, function errorCallback(response) {
                    console.log(response);
                });
            }
        };
    }]);