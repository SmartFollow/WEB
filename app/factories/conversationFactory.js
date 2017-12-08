angular.module('ConversationsModule')
	.factory('ConversationFactory', ['$http', 'OAuth', 'config', '$rootScope', function ($http, OAuth, config, $rootScope) {
		return {
			getCreateConversation: function (callback, errorCallback) {
				$http({
					method: 'GET',
					url: config.apiUrl + "api/conversations/create"
				}).then(function successCallback(response) {
					callback(response.data);
				}, function (response) {
					if (errorCallback)
						errorCallback(response.data);
					else
						$rootScope.globalAlerts.push({ type: 'danger', text: 'Erreur lors du traitement de votre requête' });
				});
			},
			getConversation: function (callback, errorCallback) {
				$http({
					method: 'GET',
					url: config.apiUrl + "api/conversations"
				}).then(function successCallback(response) {
					callback(response.data);
				}, function (response) {
					if (errorCallback)
						errorCallback(response.data);
					else
						$rootScope.globalAlerts.push({ type: 'danger', text: 'Erreur lors du traitement de votre requête' });
				});
			},
			createConversation: function (data, callback, errorCallback) {
				$http({
					method: 'POST',
					url: config.apiUrl + "api/conversations",
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
			deleteConversation: function (id, callback, errorCallback) {
				$http({
					method: 'DELETE',
					url: config.apiUrl + "api/conversations/" + id
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
