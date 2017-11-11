var routerModule = angular.module('RouterModule', ['ui.router', 'angularCSS', 'app']);

routerModule.config(function ($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/profile');

	$stateProvider

		.state('root', {
			abstract: true,
			controller: 'MenuController',
			templateUrl: 'app/views/layouts/main.html'
		})

		/**
		 * Authentication related routes
		 */
		.state('login', {
			url: '/login',
			controller: 'AuthController@login',
			templateUrl: 'app/views/auth/login.html'
		})

		/**
		 * Users-related states
		 */
		.state('users', {})
		.state('users.profile', {
			url: '/profile',
			parent: 'root',
			controller: 'UserController@profile',
			css: '/assets/css/profile.css',
			templateUrl: 'app/views/users/profile.html'
		})
		.state('users.show', {
			url: '/users/{id:int}',
			parent: 'root',
			controller: 'UserController@show',
			css: '/assets/css/profile.css',
			templateUrl: 'app/views/users/show.html'
		})
		.state('users.index', {
			url: '/users',
			parent: 'root',
			controller: 'UserController@index',
			templateUrl: 'app/views/users/index.html'
		})
		.state('users.delete', {
			url: '/users/{id:int}/delete',
			parent: 'root',
			controller: 'UserController@delete'
		})
		/**
		 * Groups-related states
		 */
		.state('groups', {})
		.state('groups.index', {
			url: '/groups',
			parent: 'root',
			controller: 'GroupController@index',
			css: '/assets/css/groups.css',
			templateUrl: 'app/views/groups/index.html'
		})
		.state('groups.create', {
			url: '/groups/create',
			parent: 'root',
			controller: 'GroupController@create',
			controllerAs: 'GroupCtrl',
			css: '/assets/css/groups.css',
			templateUrl: 'app/views/groups/create.html'
		})
		.state('groups.show', {
			url: '/groups/{id:int}',
			parent: 'root',
			controller: 'GroupController@show',
			css: '/assets/css/groups.css',
			templateUrl: 'app/views/groups/show.html'
		})
		.state('groups.edit', {
			url: '/groups/{id:int}/edit',
			parent: 'root',
			controller: 'GroupController@edit',
			css: '/assets/css/groups.css',
			templateUrl: 'app/views/groups/edit.html'
		})
		.state('groups.delete', {
			url: '/groups/{id:int}/delete',
			parent: 'root',
			controller: 'GroupController@delete'
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
			css: '/assets/css/lesson.css',
			templateUrl: 'app/views/lessons/create.html'
		})
		.state('lessons.edit', {
			url: '/lessons/{id:int}/edit',
			parent: 'root',
			controller: 'LessonController@edit',
			data: {pageTitle: 'Modifier une leçon'},
			css: '/assets/css/lesson.css',
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
			css: '/assets/css/lesson.css',
			templateUrl: 'app/views/lessons/show.html'
		})
		.state('lessons_id_student', { // ToDo: Replace by access-rules management
			url: '/lessons-student/{id:int}',
			parent: 'root',
			controller: 'lessonsIdStudent',
			data: {pageTitle: 'Déroulement du cours'},
			css: '/assets/css/lesson.css',
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

		/**
		 * Rooms-related states
		 */
		.state('rooms', {})
		.state('rooms.index', {
			url: '/rooms',
			parent: 'root',
			controller: 'RoomController@index',
			css: '/assets/css/rooms.css',
			templateUrl: 'app/views/rooms/index.html'
		})
		.state('rooms.create', {
			url: '/rooms/create',
			parent: 'root',
			controller: 'RoomController@create',
			css: '/assets/css/rooms.css',
			templateUrl: 'app/views/rooms/create.html'
		})
		.state('rooms.edit', {
			url: '/rooms/{id:int}/edit',
			parent: 'root',
			controller: 'RoomController@edit',
			css: '/assets/css/rooms.css',
			templateUrl: 'app/views/rooms/edit.html'
		})
		.state('rooms.delete', {
			url: '/rooms/{id:int}/delete',
			parent: 'root',
			controller: 'RoomController@delete'
		})

		/**
		 * Notifications-related states
		 */
		.state('notifications', {})
		.state('notifications.index', {
			url: '/notifications',
			parent: 'root',
			controller: 'NotificationController@index',
			templateUrl: 'app/views/notifications/index.html'
		})
		.state('notifications.create', {
			url: '/notifications/create',
			parent: 'root',
			controller: 'NotificationController@create',
			templateUrl: 'app/views/notifications/create.html'
		})
		.state('notifications.show', {
			url: '/notifications/{id:int}',
			parent: 'root',
			controller: 'NotificationController@show',
			templateUrl: 'app/views/notifications/show.html'
		})
		.state('notifications.edit', {
			url: '/notifications/{id:int}/edit',
			parent: 'root',
			controller: 'NotificationController@edit',
			templateUrl: 'app/views/notifications/edit.html'
		})
		.state('notifications.delete', {
			url: '/notifications/{id:int}/delete',
			parent: 'root',
			controller: 'NotificationController@delete'
		})

		/**
		 * Student classes-related states
		 */
		.state('student-classes', {})
		.state('student-classes.show', {
			url: '/student-classes/{id:int}',
			parent: 'root',
			controller: 'StudentClassController@show',
			css: '/assets/css/lesson.css',
			templateUrl: 'app/views/student-classes/show.html'
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
			css: '/assets/css/messaging.css',
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
