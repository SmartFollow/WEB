(function () {
	'use strict';

	angular
		.module('myApp', [
			'forbidden',
			'UsersModule'
		])
		.config(config)
		.run(run);

	function config() {
	}

	function run($rootScope, $state, User) {
		$rootScope.$on('$stateChangeStart', function (event, toState) {
			if (!toState.data) {
				return;
			}
			// Connecté
			if (toState.data.redirectIfLogged) {
				event.preventDefault();
				$state.go('home');
				return;
			}
			// Non connecté
			if ((toState.data.authenticate || toState.data.access) && !User.isAuthenticated()) {
				event.preventDefault();
				$state.go('auth');
				return;
			}
			// Accès refusé
			if (!User.isGranted(toState.data.access)) {
				event.preventDefault();
				$state.go('forbidden');
			}
		});
	}
}());