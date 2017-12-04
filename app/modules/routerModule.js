var routerModule = angular.module('RouterModule', ['ui.router', 'angularCSS', 'app']);

routerModule.config(function ($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/profile');

	$stateProvider
		.state('root', {
			abstract: true,
			controller: 'MenuController',
			templateUrl: 'app/views/layouts/main.html',
			resolve: { // Loading access rules before any other controller is called
				init: function (AccessRuleFactory) {
					return AccessRuleFactory.resolver();
				}
			}
		})

		/**
		 * Authentication related routes
		 */
		.state('login', {
			url: '/login',
			controller: 'AuthController@login',
			css: '/assets/css/auth.css',
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
		.state('users.create', {
			url: '/users/create',
			parent: 'root',
			controller: 'UserController@create',
			templateUrl: 'app/views/users/create.html'
		})
		.state('users.edit', {
			url: '/users/{id:int}/edit',
			parent: 'root',
			controller: 'UserController@edit',
			templateUrl: 'app/views/users/edit.html'
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
			templateUrl: 'app/views/groups/index.html'
		})
		.state('groups.create', {
			url: '/groups/create',
			parent: 'root',
			controller: 'GroupController@create',
			controllerAs: 'GroupCtrl',
			templateUrl: 'app/views/groups/create.html'
		})
		.state('groups.show', {
			url: '/groups/{id:int}',
			parent: 'root',
			controller: 'GroupController@show',
			templateUrl: 'app/views/groups/show.html'
		})
		.state('groups.edit', {
			url: '/groups/{id:int}/edit',
			parent: 'root',
			controller: 'GroupController@edit',
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
			css: '/assets/css/lessons.css',
			templateUrl: 'app/views/lessons/create.html'
		})
		.state('lessons.edit', {
			url: '/lessons/{id:int}/edit',
			parent: 'root',
			controller: 'LessonController@edit',
			data: {pageTitle: 'Modifier une leçon'},
			css: '/assets/css/lessons.css',
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
			css: '/assets/css/lessons.css',
			templateUrl: 'app/views/lessons/show.html'
		})
		.state('lessons.show.homeworks', {})
		.state('lessons.show.homeworks.delete', {
			url: '/lessons/{lessonId:int}/homeworks/{id:int}/delete',
			parent: 'root',
			controller: 'HomeworkController@delete'
		})
		.state('lessons.show.documents', {})
		.state('lessons.show.documents.delete', {
			url: '/lessons/{lessonId:int}/documents/{id:int}/delete',
			parent: 'root',
			controller: 'DocumentController@delete'
		})
		.state('lessons.show.exams', {})
		.state('lessons.show.exams.delete', {
			url: '/lessons/{lessonId:int}/exam/{id:int}/delete',
			parent: 'root',
			controller: 'ExamController@delete'
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
			css: '/assets/css/reservations.css',
			templateUrl: 'app/views/reservations/create.html'
		})
		.state('reservations.edit', {
			url: '/reservations/{id:int}/edit',
			parent: 'root',
			controller: 'ReservationController@edit',
			data: { pageTitle: 'Modifier une réservation' },
			css: '/assets/css/reservations.css',
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
			templateUrl: 'app/views/rooms/index.html'
		})
		.state('rooms.create', {
			url: '/rooms/create',
			parent: 'root',
			controller: 'RoomController@create',
			templateUrl: 'app/views/rooms/create.html'
		})
		.state('rooms.edit', {
			url: '/rooms/{id:int}/edit',
			parent: 'root',
			controller: 'RoomController@edit',
			templateUrl: 'app/views/rooms/edit.html'
		})
		.state('rooms.delete', {
			url: '/rooms/{id:int}/delete',
			parent: 'root',
			controller: 'RoomController@delete'
		})

		/**
		 * Levels-related states
		 */
		.state('levels', {})
		.state('levels.index', {
			url: '/levels',
			parent: 'root',
			controller: 'LevelController@index',
			templateUrl: 'app/views/levels/index.html'
		})
		.state('levels.create', {
			url: '/levels/create',
			parent: 'root',
			controller: 'LevelController@create',
			templateUrl: 'app/views/levels/create.html'
		})
		.state('levels.edit', {
			url: '/levels/{id:int}/edit',
			parent: 'root',
			controller: 'LevelController@edit',
			templateUrl: 'app/views/levels/edit.html'
		})
		.state('levels.delete', {
			url: '/levels/{id:int}/delete',
			parent: 'root',
			controller: 'LevelController@delete'
		})

		/**
		 * Notifications-related states
		 */
		.state('notifications', {})
		.state('notifications.index', {
			url: '/notifications',
			parent: 'root',
			controller: 'NotificationController@index',
			templateUrl: 'app/views/notifications/index.html',
			css: '/assets/css/notifications.css'
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
		.state('student-classes.index', {
			url: '/student-classes',
			parent: 'root',
			controller: 'StudentClassController@index',
			templateUrl: 'app/views/student-classes/index.html'
		})
		.state('student-classes.show', {
			url: '/student-classes/{id:int}',
			parent: 'root',
			controller: 'StudentClassController@show',
			templateUrl: 'app/views/student-classes/show.html'
		})

		/**
		 * Subjects-related states
		 */
		.state('subjects', {})
		.state('subjects.index', {
			url: '/subjects',
			parent: 'root',
			controller: 'SubjectController@index',
			templateUrl: 'app/views/subjects/index.html'
		})
		.state('subjects.create', {
			url: '/subjects/create',
			parent: 'root',
			controller: 'SubjectController@create',
			templateUrl: 'app/views/subjects/create.html'
		})
		.state('subjects.edit', {
			url: '/subjects/{id:int}/edit',
			parent: 'root',
			controller: 'SubjectController@edit',
			templateUrl: 'app/views/subjects/edit.html'
		})
		.state('subjects.show', {
			url: '/subjects/{id:int}',
			parent: 'root',
			controller: 'SubjectController@show',
			templateUrl: 'app/views/subjects/show.html'
		})
		.state('subjects.delete', {
			url: '/subjects/{id:int}/delete',
			parent: 'root',
			controller: 'SubjectController@delete'
		})

		/**
		 * Criteria-related states
		 */
		.state('criteria', {})
		.state('criteria.index', {
			url: '/criteria',
			parent: 'root',
			controller: 'CriterionController@index',
			templateUrl: 'app/views/criteria/index.html'
		})
		.state('criteria.create', {
			url: '/criteria/create',
			parent: 'root',
			controller: 'CriterionController@create',
			controllerAs: 'GroupCtrl',
			templateUrl: 'app/views/criteria/create.html'
		})
		.state('criteria.show', {
			url: '/criteria/{id:int}',
			parent: 'root',
			controller: 'CriterionController@show',
			templateUrl: 'app/views/criteria/show.html'
		})
		.state('criteria.edit', {
			url: '/criteria/{id:int}/edit',
			parent: 'root',
			controller: 'CriterionController@edit',
			templateUrl: 'app/views/criteria/edit.html'
		})
		.state('criteria.delete', {
			url: '/criteria/{id:int}/delete',
			parent: 'root',
			controller: 'CriterionController@delete'
		})

		/**
		 * Graphs-related states
		 */
		.state('graphs', {})
		.state('graphs.index', {
			url: '/graphs',
			parent: 'root',
			controller: 'GraphController@index',
			templateUrl: 'app/views/graphs/index.html'
		})
		.state('graphs.create', {
			url: '/graphs/create',
			parent: 'root',
			controller: 'GraphController@create',
			controllerAs: 'GroupCtrl',
			templateUrl: 'app/views/graphs/create.html'
		})
		.state('graphs.show', {
			url: '/graphs/{id:int}',
			parent: 'root',
			controller: 'GraphController@show',
			templateUrl: 'app/views/graphs/show.html'
		})
		.state('graphs.edit', {
			url: '/graphs/{id:int}/edit',
			parent: 'root',
			controller: 'GraphController@edit',
			templateUrl: 'app/views/graphs/edit.html'
		})
		.state('graphs.delete', {
			url: '/graphs/{id:int}/delete',
			parent: 'root',
			controller: 'GraphController@delete'
		})

		/**
		 * Difficulties-related states
		 */
		.state('difficulties', {})
		.state('difficulties.index', {
			url: '/difficulties',
			parent: 'root',
			controller: 'DifficultyController@index',
			templateUrl: 'app/views/difficulties/index.html'
		})

		/**
		 * AI-related states
		 */
		.state('ai-controllers', {})
		.state('ai-controllers.index', {
			url: '/ai-controllers',
			parent: 'root',
			controller: 'AIController@index',
			templateUrl: 'app/views/ai-controllers/index.html',
			css: '/assets/css/ai-controllers.css'
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
				$rootScope.connectedUser = user;

				if (user.group_id > next.group_id) {
					event.preventDefault();
					$state.go('login');
				}
			});

			// Get user permissions
			UserFactory.getUserAccessRules(function (response) {
				$rootScope.accessRules = response;
			});
		}
	});
}]);
