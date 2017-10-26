(function () {
	'use strict';

	angular
		.module('forbidden')
		.config(config);

	function config($stateProvider) {
		$stateProvider
			.state('forbidden', {
				url: '/forbidden',
				templateUrl: 'views/forbidden.html',
				controller: 'ForbiddenCtrl',
				controllerAs: 'forbidden'
			});
	}
}());