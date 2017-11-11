angular.module('AuthModule', ['RouterModule', 'constants', 'UsersModule', 'ngCookies', 'angular-oauth2', 'ngTagsInput'])
	.controller('AuthController@login', ['OAuth', 'OAuthToken', '$scope', '$http', '$state', '$window', '$cookies', '$rootScope', 'UserFactory', 'config', function (OAuth, OAuthToken, $scope, $http, $state, $window, $cookies, $rootScope, UserFactory, config) {
		if (OAuth.isAuthenticated()) {
			UserFactory.getProfile(function (response) {
				$rootScope.user = response;
				$state.go('users.profile');
			})
		}

		OAuth.configure({
			baseUrl: config.apiUrl,
			clientId: config.clientId,
			clientSecret: config.clientSecret
		});

		$scope.submit = function () {
			$cookies.put('username', $scope.inputEmail);
			var user = {
				username: $scope.inputEmail,
				password: $scope.inputPassword
			}
			var options = {
				grant_type: "password",
				scope: ""
			}
			var data = OAuth.getAccessToken(user, options);
			data.then(function successCallback(data) {
				UserFactory.getProfile(function (response) {
					$rootScope.user = response;
					$state.go('users.profile');
				})
			}, function errorCallback(response) {
				$("#error-auth .error").html(response.data.error);
				$("#error-auth .message").html(response.data.message);
			});
		}
	}])
	.controller('AuthController@logout', ['OAuthToken', '$scope', '$state', '$window', function (OAuthToken, $scope, $state, $window) {
		$scope.logout = function () {
			OAuthToken.removeToken();
			$state.go('login');
		}
	}]);