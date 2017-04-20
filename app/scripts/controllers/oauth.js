angular.module('oauthApp', ['routerApp', 'user', 'ngCookies', 'angular-oauth2'])
.controller('login', ['OAuth', 'OAuthToken', '$scope', '$http', '$state', '$window', '$cookies', '$rootScope', 'users', function(OAuth, OAuthToken, $scope, $http, $state, $window, $cookies, $rootScope, users) {
  if (OAuth.isAuthenticated())
  {
    users.getUserFromData(function (response) {
      $rootScope.user = response;
      if ($rootScope.user.id == 4)
        $state.go('profil-student');
      else
        $state.go('profil-teacher');
    })
  }
   OAuth.configure({
    baseUrl: "http://api.dev.smartfollow.org/",
    clientId: "2",
    clientSecret: "IT1tAxoBLlzOJeE5gOoNqq2LOZws1EV5rfc7tZW2"
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
    data.then(function(data) {
        $window.location.reload();
    });
  }	
}])

.controller('disconnect', ['OAuthToken', '$scope', '$state','$window', function(OAuthToken, $scope, $state, $window) {
    $scope.disconnect = function () {
      OAuthToken.removeToken();
      $window.location.reload();
    }
}]);














/*
** Old connection
*/

/*
angular.module('app', ['routerApp'])
.controller('Connection', ['$scope', '$http', '$state', function($scope, $http, $state) {
    //console.log(JSON.parse(window.localStorage.getItem("smartfollow")).oauth.access_token);
    /*if (JSON.parse(window.localStorage.getItem("smartfollow")).oauth)
      $state.go('connected');
    $scope.submit = function () {
        $http({
           url: "http://smartfollow.api/oauth/token",
           method: "POST",
           data: {
                username: $scope.inputEmail,
                password: $scope.inputPassword,
                grant_type: "password",
                client_id: "2",
                client_secret: "r2yiOu2YIKymJr0VBMxQC6QySCwniFMId8QqDefm",
                scope: ""
           }
          }).then(function successCallback(response) {
            var smartfollow = {
                oauth: {
                    access_token: response.access_token,
                    expires_in: response.expires_in,
                    refresh_token: response.refresh_token
                }
            };
            // DOM Storage
            window.localStorage.setItem("smartfollow", JSON.stringify(smartfollow));
            $state.go('connected');
          }, function errorCallback(response) {
            alert("Le nom d'utilisateur ou le mot de passe n'est pas pas correct. Essayez à nouveau.");
        });
    }
}]);*/