var routerApp = angular.module('routerApp', ['ui.router', 'angularCSS', 'app']);
 
routerApp.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('profile');
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
            controller: 'user',
            templateUrl: 'app/views/menu.html'
        })
        // User profile
        .state('profile', {
            url: '/profile',
            parent: 'root',
            controller: 'ProfileController',
            css: '/app/styles/profile.css',
            templateUrl: 'app/views/profile.html'
        })
        // Temporary student profil view
        .state('profil', {
            url: '/users/{id:int}',
            parent: 'root',
            controller: 'profilId',
            css: '/app/styles/student_profile.css',
            templateUrl: 'app/views/student_profile.html'
        })
        // Lessons create
        .state('lessons-create', {
            url: '/lessons/create',
            parent: 'root',
            controller: 'lessonsCreate',
            data:{ pageTitle: 'Ajouter une leçon' },
            css: '/app/styles/lesson.css',
            templateUrl: 'app/views/lessons_create.html'
        })
        // Lessons edit
        .state('lessons-edition', {
            url: '/lessons/{id:int}/edit',
            parent: 'root',
            controller: 'lessonsEdit',
            data:{ pageTitle: 'Editer une leçon' },
            css: '/app/styles/lesson.css',
            templateUrl: 'app/views/lessons_edit.html'
        })
        // Lessons delete
        .state('lessons-delete', {
            url: '/lessons/{id:int}/delete',
            parent: 'root',
            controller: 'lessonsDelete',
            data:{ pageTitle: 'Supprimer une leçon' }
        })
        // Lesson view
        .state('lessons_id', {
            url: '/lessons/{id:int}',
            parent: 'root',
            controller: 'lessonsId',
            data:{ pageTitle: 'Déroulement du cours' },
            css: '/app/styles/lesson.css',
            templateUrl: 'app/views/lessons_id.html'
        })
        // Lesson student view
        .state('lessons_id_student', {
            url: '/lessons-student/{id:int}',
            parent: 'root',
            controller: 'lessonsIdStudent',
            data:{ pageTitle: 'Déroulement du cours' },
            css: '/app/styles/lesson.css',
            templateUrl: 'app/views/lessons_id_student.html'
        })
        // Reservations rooms
        .state('reservations', {
            url: '/reservations/create',
            parent: 'root',
            controller: 'reservation',
            data:{ pageTitle: 'Réservation salle' },
            templateUrl: 'app/views/reservations.html'
        })
        // Reservations rooms by Id
        .state('reservations_id', {
            url: '/reservations/{id:int}/edit',
            parent: 'root',
            controller: 'reservationsEdit',
            data:{ pageTitle: 'Réservation' },
            templateUrl: 'app/views/reservations.html'
        })
        // Reservations rooms by Id
        .state('reservations_delete', {
            url: '/reservations/{id:int}/delete',
            parent: 'root',
            controller: 'reservationsDelete',
            data:{ pageTitle: 'Réservation' }
        })
        // Evaluation view
        .state('evaluation', {
            url: '/evaluation',
            parent: 'root',
            controller: 'profil',
            data:{ pageTitle: "Création d'une évaluation" },
            css: '/app/styles/evaluation.css',
            templateUrl: 'app/views/evaluation.html'
        })
        // Planning view
        .state('planning', {
            url: '/planning',
            parent: 'root',
            data:{ pageTitle: 'Planning' },
            controller: 'planning',
            templateUrl: 'app/views/planning.html'
        })
        // Messaging view
        .state('messaging', {
            url: '/messaging',
            parent: 'root',
            data:{ pageTitle: 'Messagerie' },
            controller: 'messaging',
            css: '/app/styles/messaging.css',
            templateUrl: 'app/views/messaging.html'
        })
});

routerApp.run(['$rootScope', '$state', 'OAuth', 'users', function($rootScope, $state, OAuth, users)  {
    $rootScope.$on('$stateChangeStart', function (event, next, current) {
		if (!OAuth.isAuthenticated() && next.name != 'login') {
		    $state.go('login');
		    event.preventDefault();
		}
		else if (next.name != 'login') {
		    // Get User profile && Permissions
		    users.getUserFromData(function (user) {
		        $rootScope.user = user;

		        if (user.group_id > next.group_id)
		        {
		            $state.go('login');
		            event.preventDefault();
		        }
		    });

		    users.getUserAccessRules(function (response) {
			    $rootScope.accessRules = response;
		    });
		}
    });
}]);