angular.module('myApp', ['angular-oauth2'])
  .config(['OAuthProvider', function(OAuthProvider) {
    OAuthProvider.configure({
      baseUrl: 'http://api.dev.smartfollow.org/oauth/token',
      clientId: '2',
      clientSecret: 'BjEebk7a3NP9nXOswW2Y5nJ04V7aRLGjxKYUEV3C'
  });
}]);

angular.module('myApp', ['angular-oauth2'])
  .run(['$rootScope', '$window', 'OAuth', function($rootScope, $window, OAuth) {
    $rootScope.$on('oauth:error', function(event, rejection) {

      if ('invalid_grant' === rejection.data.error) {
        return;
      }


      if ('invalid_token' === rejection.data.error) {
        return OAuth.getRefreshToken();
      }

      return $window.location.href = '/login?error_reason=' + rejection.data.error;
  });
}]);

angular.module('myApp', ['angular-oauth2'])
.controller('Connection', ['$scope', '$http', function($scope, $http) {
	user
	options
	OAuth.getAccessToken(user, options);
}]);