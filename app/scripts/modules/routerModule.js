var routerModule = angular.module('RouterModule', ['ui.router', 'angularCSS', 'app']);

routerModule.config(function ($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/profile');

	$stateProvider

		.state('root', {
			abstract: true,
			controller: 'MenuController',
			templateUrl: 'app/views/menu.html'
		})

		/**
		 * Authentication related routes
		 */
		.state('login', {
			url: '/login',
			controller: 'AuthController@login',
			templateUrl: 'app/views/login.html'
		})

		/**
		 * Users-related states
		 */
		.state('users', {})
		.state('users.profile', {
			url: '/profile',
			parent: 'root',
			controller: 'UserController@profile',
			css: '/app/styles/profile.css',
			templateUrl: 'app/views/users/show.html'
		})
		.state('users.show', {
			url: '/users/{id:int}',
			parent: 'root',
			controller: 'UserController@show',
			css: '/app/styles/student_profile.css',
			templateUrl: 'app/views/users/show.html'
		})

		/**
		 * Groups-related states
		 */
		.state('groups', {
			url: '/groups',
			parent: 'root',
			controller: 'GroupController@index',
			css: '/app/styles/groups.css',
			templateUrl: 'app/views/groups/index.html'
		})

		/**
		 * Lessons-related states
		 */
		.state('lessons', {})
		.state('lessons.create', {
			url: '/lessons/create',
			parent: 'root',
			controller: 'LessonController@create',
			data: {pageTitle: 'Ajouter une leçon'},
			css: '/app/styles/lesson.css',
			templateUrl: 'app/views/lessons/create.html'
		})
		.state('lessons.edit', {
			url: '/lessons/{id:int}/edit',
			parent: 'root',
			controller: 'LessonController@edit',
			data: {pageTitle: 'Modifier une leçon'},
			css: '/app/styles/lesson.css',
			templateUrl: 'app/views/lessons/edit.html'
		})
		.state('lessons.delete', {
			url: '/lessons/{id:int}/delete',
			parent: 'root',
			controller: 'LessonController@delete',
			data: { pageTitle: 'Supprimer une leçon' }
		})
		.state('lessons.show', {
			url: '/lessons/{id:int}',
			parent: 'root',
			controller: 'LessonController@show',
			data: {pageTitle: 'Déroulement du cours'},
			css: '/app/styles/lesson.css',
			templateUrl: 'app/views/lessons/show.html'
		})
		.state('lessons_id_student', { // ToDo: Replace by access-rules management
			url: '/lessons-student/{id:int}',
			parent: 'root',
			controller: 'lessonsIdStudent',
			data: {pageTitle: 'Déroulement du cours'},
			css: '/app/styles/lesson.css',
			templateUrl: 'app/views/lessons_id_student.html'
		})

		/**
		 * Reservations-related states
		 */
		.state('reservations', {})
		.state('reservations.create', {
			url: '/reservations/create',
			parent: 'root',
			controller: 'ReservationController@create',
			data: { pageTitle: 'Réserver une salle' },
			templateUrl: 'app/views/reservations/create.html'
		})
		.state('reservations.edit', {
			url: '/reservations/{id:int}/edit',
			parent: 'root',
			controller: 'ReservationController@edit',
			data: { pageTitle: 'Modifier une réservation' },
			templateUrl: 'app/views/reservations/create.html'
		})
		.state('reservations.delete', {
			url: '/reservations/{id:int}/delete',
			parent: 'root',
			controller: 'ReservationController@delete'
		})

		// Planning view
		.state('planning', {
			url: '/planning',
			parent: 'root',
			data: {pageTitle: 'Planning'},
			controller: 'PlanningController',
			templateUrl: 'app/views/planning.html'
		})
		// Messaging view
		.state('messaging', {
			url: '/messaging',
			parent: 'root',
			data: {pageTitle: 'Messagerie'},
			controller: 'MessagingController',
			css: '/app/styles/messaging.css',
			templateUrl: 'app/views/messaging.html'
		})
});

routerModule.run(['$rootScope', '$state', 'OAuth', 'UserFactory', function ($rootScope, $state, OAuth, UserFactory) {
	$rootScope.$on('$stateChangeStart', function (event, next, current) {
		if (!OAuth.isAuthenticated() && next.name != 'login') {
			event.preventDefault();
			$state.go('login');
		}
		else if (next.name != 'login') {
			// Get user profile
			UserFactory.getProfile(function (user) {
				$rootScope.user = user;

				if (user.group_id > next.group_id) {
					$state.go('login');
					event.preventDefault();
				}
			});

			// Get user permissions
			UserFactory.getUserAccessRules(function (response) {
				$rootScope.accessRules = response;
			});
		}
	});
}]);