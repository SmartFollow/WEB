angular.module('oauthApp', ['routerApp', 'constants', 'user', 'ngCookies', 'angular-oauth2', 'ngTagsInput'])
.controller('login', ['OAuth', 'OAuthToken', '$scope', '$http', '$state', '$window', '$cookies', '$rootScope', 'users', 'config', function(OAuth, OAuthToken, $scope, $http, $state, $window, $cookies, $rootScope, users, config) {
  if (OAuth.isAuthenticated())
  {
    users.getUserFromData(function (response) {
      $rootScope.user = response;
	  $state.go('profile');
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
      users.getNewUserFromData(function (response) {
          $rootScope.user = response;
          $state.go('profile');
        })
      }, function errorCallback(response) {
          $("#error-auth .error").html(response.data.error);
          $("#error-auth .message").html(response.data.message);
      });
  }	
}])

.controller('disconnect', ['OAuthToken', '$scope', '$state','$window', function(OAuthToken, $scope, $state, $window) {
    $scope.disconnect = function () {
      OAuthToken.removeToken();
      $state.go('login');
    }
}]);