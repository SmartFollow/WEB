angular.module('ProcessesModule')
	.controller('ProcessUserController@index', ['$rootScope', '$scope', '$stateParams', 'ProcessFactory', 'AccessRuleFactory', function ($rootScope, $scope, $stateParams, ProcessFactory, AccessRuleFactory) {
		ProcessFactory.getUserProcesses($stateParams.id, function (user) {
			$scope.user = user;

			$rootScope.pageTitle = 'Liste des processus de ' + user.firstname + ' ' + user.lastname;

			$(function () {
				$('[data-toggle="tooltip"]').tooltip()
			});

			if (AccessRuleFactory.get().includes('processes-users.store'))
			{
				ProcessFactory.getProcesses(function (processes) {
					$scope.processes = processes;

					$scope.user.processes.forEach(function (process) {
						let index = $scope.processes.findIndex(e => e.id === process.id);
						if (index > -1)
							$scope.processes.splice(index, 1);
					});
				});
			}
			else
				$scope.processes = [];
		});

		/**
		 * Modify the current step of a process assigned to the user
		 *
		 * @param step
		 */
		$scope.setStep = function (step) {
			ProcessFactory.updateUserProcess({
					step_id: step.id,
					process_id: step.process_id,
					user_id: $stateParams.id
				},
				function (processes) {
					$scope.user.processes = processes;

					$(function () {
						$('[data-toggle="tooltip"]').tooltip();
					});
				});
		};

		/**
		 * Add a new process to the user
		 *
		 * @param step
		 */
		$scope.addProcess = function (step) {
			ProcessFactory.storeUserProcess({
					step_id: step.id,
					process_id: step.process_id,
					user_id: $stateParams.id
				},
				function (processes) {
					$scope.user.processes = processes;

					$scope.user.processes.forEach(function (process) {
						let index = $scope.processes.findIndex(e => e.id === process.id);
						if (index > -1)
							$scope.processes.splice(index, 1);
					});

					$(function () {
						$('[data-toggle="tooltip"]').tooltip();
					});
				});
		};

		/**
		 * Remove a process from a user
		 *
		 * @param process
		 */
		$scope.deleteProcess = function (process) {
			ProcessFactory.deleteUserProcess($stateParams.id, process.id,
				function (processes) {
					$scope.user.processes = processes;

					ProcessFactory.getProcesses(function (processes) {
						$scope.processes = processes;

						$scope.user.processes.forEach(function (process) {
							let index = $scope.processes.findIndex(e => e.id === process.id);
							if (index > -1)
								$scope.processes.splice(index, 1);
						});

						$(function () {
							$('[data-toggle="tooltip"]').tooltip();
						});
					});
				});
		};
	}]);
