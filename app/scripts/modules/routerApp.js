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
        // Lessons creation & edition
        .state('lessons', {
            url: '/lessons',
            parent: 'root',
            controller: 'lessons',
            data:{ pageTitle: 'Lessons' },
            css: '/app/styles/lesson.css',
            templateUrl: 'app/views/lessons.php'
        })
        // Lesson view
        .state('lessons_id', {
            url: '/lessons/{id:int}',
            parent: 'root',
            controller: 'lessonsId',
            data:{ pageTitle: 'Déroulement du cours' },
            css: '/app/styles/lesson.css',
            templateUrl: 'app/views/lessons_id.php'
        })
        // Lesson view
        .state('lessons_id_student', {
            url: '/lessons-student/{id:int}',
            parent: 'root',
            controller: 'lessonsIdStudent',
            data:{ pageTitle: 'Déroulement du cours' },
            css: '/app/styles/lesson.css',
            templateUrl: 'app/views/lessons_id_student.php'
        })
        // Reservations rooms
        .state('reservations', {
            url: '/reservations',
            parent: 'root',
            controller: 'reservation',
            data:{ pageTitle: 'Réservation salle' },
            templateUrl: 'app/views/reservations.php'
        })
        // Reservations rooms by Id
        .state('reservations_id', {
            url: '/reservations/{id:int}',
            parent: 'root',
            controller: 'reservationsId',
            data:{ pageTitle: 'Réservation' },
            templateUrl: 'app/views/reservations.php'
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
        // Messaging view
        .state('messaging', {
            url: '/messaging',
            parent: 'root',
            data:{ pageTitle: 'Messagerie' },
            controller: 'messaging',
            css: '/app/styles/messaging.css',
            templateUrl: 'app/views/messaging.php'
        })
});