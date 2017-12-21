angular.module('AbsencesModule')
	.controller('AbsenceController@index', ['$rootScope', '$scope', '$state', 'AbsenceFactory', function ($rootScope, $scope, $state, AbsenceFactory) {
		$rootScope.pageTitle = "Liste des absences d'élèves";

		AbsenceFactory.getAbsences(function (absences) {
			$scope.absences = absences;

			$scope.absences.forEach(function (absence) {
				absence.justified_at = absence.justified_at ? new Date(absence.justified_at.replace('/-/g',"/")) : null;
				absence.evaluation.lesson.start = new Date(absence.evaluation.lesson.start.replace('/-/g',"/"));
				absence.evaluation.lesson.end = new Date(absence.evaluation.lesson.end.replace('/-/g',"/"));
			});
		});

		$scope.justify = function (absence) {
			let justifiedAt = new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString();
			justifiedAt = justifiedAt.replace(/\//g, "-");

			AbsenceFactory.updateAbsence(absence.id, {
				justified_at: justifiedAt
			}, function (updatedAbsence) {
				updatedAbsence.justified_at = new Date(updatedAbsence.justified_at.replace('/-/g',"/"));
				updatedAbsence.evaluation.lesson.start = new Date(updatedAbsence.evaluation.lesson.start.replace('/-/g',"/"));
				updatedAbsence.evaluation.lesson.end = new Date(updatedAbsence.evaluation.lesson.end.replace('/-/g',"/"));

				$scope.absences[$scope.absences.findIndex(e => e.id === updatedAbsence.id)] = updatedAbsence;
			});
		}
	}]);
