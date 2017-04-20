angular.module('connection', [])
.controller('Connection', ['$scope', '$http', 'OAuth', function($scope, $http) {
  $scope.submit = function () {
    $http({
       url: "http://api.dev.smartfollow.org/oauth/token",
       method: "POST",
       data: {
            username: $scope.inputEmail,
            password: $scope.inputPassword,
            grant_type: "password",
            client_id: "2",
            client_secret: "IT1tAxoBLlzOJeE5gOoNqq2LOZws1EV5rfc7tZW2",
            scope: ""
       }
      }).then(function successCallback(response) {
        document.cookie='access_token='+response.access_token;
        document.cookie='expires_in='+response.expires_in;
        document.cookie='refresh_token='+response.refresh_token;
        window.location.replace("./connected.html");
      }, function errorCallback(response) {
        alert("Le nom d'utilisateur ou le mot de passe n'est pas pas correct. Essayez à nouveau.");
      });
  }
}]);
