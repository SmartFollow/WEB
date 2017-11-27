angular.module('ConversationsModule')
	.factory('ConversationFactory', ['$http', 'OAuth', 'config', function ($http, OAuth, config) {
    return {
      getCreateConversation: function (callback) {
        $http({
          method: 'GET',
          url: config.apiUrl + "api/conversations/create"
        }).then(function successCallback(response) {
          callback(response.data);
        }, function errorCallback(response) {
          console.log(response);
        });
      },
      getConversation: function (callback) {
        $http({
          method: 'GET',
          url: config.apiUrl + "api/conversations"
        }).then(function successCallback(response) {
          callback(response.data);
        }, function errorCallback(response) {
          console.log(response);
        });
      },
      createConversation: function (data, callback) {
        $http({
          method: 'POST',
          url: config.apiUrl + "api/conversations",
          data: data
        }).then(function successCallback(response) {
          callback(response.data);
        }, function errorCallback(response) {
          console.log(response);
        });
      },
      deleteConversation: function (id, callback) {
        $http({
          method: 'DELETE',
          url: config.apiUrl + "api/conversations/" + id
        }).then(function successCallback(response) {
          callback(response.data);
        }, function errorCallback(response) {
          console.log(response);
        });
      }
    }
  }]);
