var routerApp = angular.module('routerApp', ['ui.router']);
 
routerApp.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/login');
    $stateProvider
        // Login view
        .state('login', {
            url: '/login',
            templateUrl: 'app/views/login.html'
        })
        .state('connected', {
            url: '/connected',
            templateUrl: 'app/views/connected.html'
        })
});

routerApp.controller('Connection', ['$scope', '$http', '$state', function($scope, $http, $state) {
    console.log(JSON.parse(window.localStorage.getItem("smartfollow")));
    $scope.submit = function () {
        $http({
           url: "http://api.dev.smartfollow.org/oauth/token",
           method: "POST",
           data: {
                username: $scope.inputEmail,
                password: $scope.inputPassword,
                grant_type: "password",
                client_id: "2",
                client_secret: "BjEebk7a3NP9nXOswW2Y5nJ04V7aRLGjxKYUEV3C",
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
}]);