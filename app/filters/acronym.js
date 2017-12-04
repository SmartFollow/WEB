angular.module('app')
	.filter('acronym', function () {
		return function (str) {
			return str.split(' ').map(e => e[0]).join('');
		}
	});