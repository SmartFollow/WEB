angular.module('ProcessesModule')
    .controller('ProcessController@index', ['$rootScope', '$scope', '$state', 'ProcessFactory', function ($rootScope, $scope, $state, ProcessFactory) {
        $rootScope.pageTitle = "Liste des processus";

        ProcessFactory.getProcesses(function (processes) {
            $scope.processes = processes;
        });
    }])
    .controller('ProcessController@show', ['$rootScope', '$scope', '$state', '$stateParams', 'ProcessFactory', "StepFactory", function ($rootScope, $scope, $state, $stateParams, ProcessFactory, StepFactory) {
        $rootScope.pageTitle = "Affichage d'un processus";

        ProcessFactory.getProcess($stateParams.id, function (process) {
            $scope.process = process;

            $rootScope.pageTitle = "Affichage d'un processus : " + $scope.process.name;
        });

        $scope.createStep = function () {
            var name = $('input[name="name"]').val();
            var description = $('input[name="description"]').val();

            StepFactory.storeStep({
                name: name,
                description: description,
                process_id: $stateParams.id
            }, function (step) {
                $rootScope.globalAlerts.push({ type: 'success', text: 'Votre étape a bien été ajoutée.' });

                $scope.process.steps.push(step);
            });
        };

        $scope.deleteStep = function (step) {
            StepFactory.deleteStep(step.id, function () {
                $rootScope.globalAlerts.push({ type: 'success', text: 'Votre étape a bien été supprimée.' });
                $scope.process.steps = $scope.process.steps.filter(s => s.id != step.id);
            });
        };
    }])
    .controller('ProcessController@create', ['$rootScope', '$scope', '$state', '$timeout', 'ProcessFactory', function ($rootScope, $scope, $state, $timeout, ProcessFactory) {
        $rootScope.pageTitle = "Ajouter un processus";
        $scope.alerts = {
            success: {},
            danger: {}
        };

        $scope.createProcess = function () {
            var name = $('input[name="name"]').val();
            var description = $('input[name="description"]').val();

            ProcessFactory.storeProcess({
                name: name,
                description: description,
            }, function (process) {
                $scope.alerts.success = {
                    show: true,
                    text: "Votre processus a bien été enregistré, vous allez être redirigé vers la liste des processus."
                };

                $timeout(function () {
                    $state.go('processes.index');
                }, 3000);
            });
        }
    }])
    .controller('ProcessController@edit', ['$rootScope', '$scope', '$state', '$stateParams', '$timeout', 'ProcessFactory', function ($rootScope, $scope, $state, $stateParams, $timeout, ProcessFactory) {
        $rootScope.pageTitle = "Modification d'un processus";
        $scope.alerts = {
            success: {},
            danger: {}
        };

        ProcessFactory.getEditFormData($stateParams.id, function (process) {
            $scope.process = process;

            $rootScope.pageTitle = "Modification d'un processus : " + $scope.process.name;
        });

        $scope.editProcess = function () {
            var name = $('input[name="name"]').val();
            var description = $('input[name="description"]').val();

            ProcessFactory.updateProcess($stateParams.id, {
                name: name,
                description: description
            }, function (process) {
                $scope.alerts.success = {
                    show: true,
                    text: "Votre processus a bien été modifié, vous allez être redirigé vers la liste des processus."
                };

                $timeout(function () {
                    $state.go('processes.index');
                }, 3000);
            });
        }
    }])
    .controller('ProcessController@delete', ['$rootScope', '$scope', '$state', '$stateParams', 'ProcessFactory', function ($rootScope, $scope, $state, $stateParams, ProcessFactory) {
        if (confirm('Êtes-vous sûr de vouloir supprimer le processus ?'))
        {
            ProcessFactory.deleteProcess($stateParams.id, function () {
                $state.go('processes.index');
            });
        }
        else {
            $state.go('processes.index')
        }
    }]);
