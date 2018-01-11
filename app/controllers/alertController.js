angular.module('app')
	.controller('AlertController', ['$scope', function ($scope) {
		$scope.items = [
			{"id": 1, "Type": "warning", "Message": "Notes en Mathématiques en baisse"},
			{"id": 3, "Type": "ok", "Message": "Notes en SVT entrain de remonter. Bon travail !"},
			{"id": 4, "Type": "remove", "Message": "Baisse des notes en Histoire et manque de rigueur"},
		];
	}]);
