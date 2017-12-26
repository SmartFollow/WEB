angular.module('AIModule')
	.controller('AIController@index', ['$rootScope', '$scope', '$state', 'AIFactory', function ($rootScope, $scope, $state, AIFactory) {
		$rootScope.pageTitle = "Contrôleurs de l'intelligence artificielle";

		$scope.displayResults = function (results) {
			$('#loading').addClass('hidden');
			$scope.results = results;
		};

		$scope.controllers = [
			{
				title: "Moyenne des critères étudiants",
				description: "Lance le calcul des moyennes des critères reçus par tous les étudiants qui ont été évalués récemment.",
				runFunction: function() {
					$('#loading').removeClass('hidden');
					AIFactory.runCriteriaStudentsAverage($scope.displayResults);
				}
			},
			{
				title: "Somme des critères étudiants",
				description: "Lance le calcul des sommes des critères reçus par tous les étudiants qui ont été évalués récemment.",
				runFunction: function() {
					$('#loading').removeClass('hidden');
					AIFactory.runCriteriaStudentsSum($scope.displayResults);
				}
			},
			{
				title: "Moyenne des absences / retards étudiants",
				description: "Lance le calcul des sommes des absences et des retards de tous les étudiants ayant reçu une évaluation récemment.",
				runFunction: function() {
					$('#loading').removeClass('hidden');
					AIFactory.runAbsenceDelaysStudents($scope.displayResults);
				}
			},
			{
				title: "Moyenne des critères classes",
				description: "Lance le calcul des moyennes des critères reçus par toutes les classes d'étudiants ayant reçu une évaluation récemment.",
				runFunction: function() {
					$('#loading').removeClass('hidden');
					AIFactory.runCriteriaClassesAverage($scope.displayResults);
				}
			},
			{
				title: "Somme des critères classes",
				description: "Lance le calcul des sommes des critères reçus par toutes les classes d'étudiants ayant reçu une évaluation récemment.",
				runFunction: function() {
					$('#loading').removeClass('hidden');
					AIFactory.runCriteriaClassesSum($scope.displayResults);
				}
			},
			{
				title: "Moyenne des absences / retards classes",
				description: "Lance le calcul des sommes des absences et des retards de toutes les classes d'étudiants ayant reçu une évaluation récemment.",
				runFunction: function() {
					$('#loading').removeClass('hidden');
					AIFactory.runAbsenceDelaysClasses($scope.displayResults);
				}
			},
			{
				title: "Moyenne des critères donnés",
				description: "Lance le calcul des moyennes des critères donnés par les professeurs dans toutes les évaluations données récemment.",
				runFunction: function() {
					$('#loading').removeClass('hidden');
					AIFactory.runCriteriaGivenAverage($scope.displayResults);
				}
			},
			{
				title: "Somme des critères donnés",
				description: "Lance le calcul des sommes des critères donnés par les professeurs dans toutes les évaluations données récemment.",
				runFunction: function() {
					$('#loading').removeClass('hidden');
					AIFactory.runCriteriaGivenSum($scope.displayResults);
				}
			},
			{
				title: "Moyenne des absences / retards donnés",
				description: "Lance le calcul des sommes des absences et des retards donnés par les professeurs dans toutes les évaluations données récemment.",
				runFunction: function() {
					$('#loading').removeClass('hidden');
					AIFactory.runAbsenceDelaysGiven($scope.displayResults);
				}
			},
			{
				title: "Génération des alertes",
				description: "Lance la génération des alertes pour la semaine actuelle qui seront ensuite affichées sur le profil de chaque utilisateur concerné.",
				runFunction: function() {
					$('#loading').removeClass('hidden');
					AIFactory.runAlerts($scope.displayResults);
				}
			}
		];
	}]);
