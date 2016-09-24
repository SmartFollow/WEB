angular.module('app', [])
.controller('Connection', ['$scope', '$http', function($scope, $http) {
  $scope.submit = function () {
    $http({
       url: "http://api.dev.smartfollow.org/oauth/token",
       method: "POST",
       data: {
            username: $("#inputEmail").val(),
            password: $("#inputPassword").val(),
            grant_type: "password",
            client_id: "2",
            client_secret: "BjEebk7a3NP9nXOswW2Y5nJ04V7aRLGjxKYUEV3C",
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
