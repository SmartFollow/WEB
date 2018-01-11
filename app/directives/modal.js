angular.module('app')
	.directive('modal', function () {
		return {
			replace: true,
			templateUrl: function (elt, attr) {
				return attr.src + '.html';
			}
		};
	});