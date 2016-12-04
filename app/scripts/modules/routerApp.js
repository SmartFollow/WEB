var routerApp = angular.module('routerApp', ['ui.router', 'angularCSS', 'app']);
 
routerApp.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('login');
    $stateProvider
        // Login view
        .state('login', {
            url: '/login',
            controller: 'login',
            templateUrl: 'app/views/login.html'
        })
        // Register view
        .state('register', {
            url: '/register',
            controller: 'register',
            templateUrl: 'app/views/register.html'
        })
        // Menu
        .state('root', {
            abstract: true,
            templateUrl: 'app/views/menu.html'
        })
        // Temporary student profil view
        .state('profil-student', {
            url: '/profil-student',
            parent: 'root',
            controller: 'profil',
            css: '/app/styles/student_profile.css',
            templateUrl: 'app/views/student_profile.php'
        })
        // Temporary student profil view
        .state('profil', {
            url: '/profil/{id:int}',
            parent: 'root',
            controller: 'profilId',
            css: '/app/styles/student_profile.css',
            templateUrl: 'app/views/student_profile.php'
        })
        // Temporary teacher profil view
        .state('profil-teacher', {
            url: '/profil-teacher',
            parent: 'root',
            controller: 'profil',
            css: '/app/styles/teacher_profile.css',
            templateUrl: 'app/views/teacher_profile.php'
        })
        // Lesson view
        .state('lesson', {
            url: '/lesson',
            parent: 'root',
            controller: 'profil',
            data:{ pageTitle: 'Déroulement du cours' },
            css: '/app/styles/lesson.css',
            templateUrl: 'app/views/lesson.php'
        })
        // Evaluation view
        .state('evaluation', {
            url: '/evaluation',
            parent: 'root',
            controller: 'profil',
            data:{ pageTitle: "Création d'une évaluation" },
            css: '/app/styles/evaluation.css',
            templateUrl: 'app/views/evaluation.php'
        })
        // Planning view
        .state('planning', {
            url: '/planning',
            parent: 'root',
            data:{ pageTitle: 'Planning' },
            controller: 'profil',
            templateUrl: 'app/views/planning.php'
        })
});