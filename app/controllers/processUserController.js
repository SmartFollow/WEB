angular.module('ProcessesModule')
	.controller('ProcessUserController@index', ['$rootScope', '$scope', '$stateParams', 'ProcessFactory', function ($rootScope, $scope, $stateParams, ProcessFactory) {
		ProcessFactory.getUserProcesses($stateParams.id, function (user) {
			$scope.user = user;

			$rootScope.pageTitle = 'Liste des processus de ' + user.firstname + ' ' + user.lastname;

			$(function () {
				$('[data-toggle="tooltip"]').tooltip()
			});
		});

		ProcessFactory.getProcesses(function (processes) {
			$scope.processes = processes;
		});

		$scope.setStep = function (step) {
			ProcessFactory.updateUserProcess({
					step_id: step.id,
					process_id: step.process_id,
					user_id: $stateParams.id
				},
				function (processes) {
					$scope.user.processes = processes;

					$(function () {
						$('[data-toggle="tooltip"]').tooltip()
					});
				});
		}
	}]);
