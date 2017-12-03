angular.module('app')
	.directive('modal', function () {
		return {
			templateUrl: function (elt, attr) {
				return attr.src + '.html';
			}
		};
	});