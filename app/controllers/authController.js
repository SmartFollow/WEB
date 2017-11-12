angular.module('AuthModule')
	.config(['OAuthProvider', 'OAuthTokenProvider', 'config', function(OAuthProvider, OAuthTokenProvider, config) {
		OAuthProvider.configure({
			baseUrl: config.apiUrl,
			clientId: config.clientId,
			clientSecret: config.clientSecret,
			grantPath: '/oauth/token',
			revokePath: '/oauth/revoke'
		});
		OAuthTokenProvider.configure({
			name: 'token',
			options: { secure: false }
		});
	}])
	.controller('AuthController@login', ['OAuth', 'OAuthToken', '$scope', '$http', '$state', '$window', '$cookies', '$rootScope', 'UserFactory', 'config', function (OAuth, OAuthToken, $scope, $http, $state, $window, $cookies, $rootScope, UserFactory, config) {
		if (OAuth.isAuthenticated()) {
			UserFactory.getProfile(function (response) {
				$rootScope.user = response;
				$state.go('users.profile');
			})
		}

		$scope.submit = function () {
			$cookies.put('username', $scope.inputEmail);
			var user = {
				username: $scope.inputEmail,
				password: $scope.inputPassword
			};
			var options = {
				grant_type: "password",
				scope: ""
			};
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