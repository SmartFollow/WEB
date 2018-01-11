angular.module('app')
	.factory('AccessRuleFactory', ['$http', 'config', function ($http, config) {
		var items = [];

		return {
			resolver: function () {
				return $http.get(config.apiUrl + "api/users/profile/access-rules")
							.then(function (data) {
								items = data.data;
							}, function (error) { });
			},
			get() {
				return items;
			}
		}
	}]);
