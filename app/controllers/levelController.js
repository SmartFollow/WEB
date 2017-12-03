angular.module('LevelsModule')
    .controller('LevelController@index', ['$rootScope', '$scope', '$state', 'LevelFactory', function ($rootScope, $scope, $state, LevelFactory) {
        $rootScope.pageTitle = "Liste des niveaux";

        LevelFactory.getLevels(function (levels) {
            $scope.levels = levels;
        });
    }])
    .controller('LevelController@create', ['$rootScope', '$scope', '$state', '$timeout', 'LevelFactory', function ($rootScope, $scope, $state, $timeout, LevelFactory) {
        $rootScope.pageTitle = "Ajouter un niveau";
        $scope.alerts = {
            success: {},
            danger: {}
        };

        $scope.createLevel = function () {
            var name = $('input[name="name"]').val();

            LevelFactory.storeLevel({
                name: name,
            }, function (level) {
                $scope.alerts.success = {
                    show: true,
                    text: "Votre niveau a bien été enregistré, vous allez être redirigé vers la liste des niveaux."
                };

                $timeout(function () {
                    $state.go('levels.index');
                }, 3000);
            });
        }
    }])
    .controller('LevelController@edit', ['$rootScope', '$scope', '$state', '$stateParams', '$timeout', 'LevelFactory', function ($rootScope, $scope, $state, $stateParams, $timeout, LevelFactory) {
        $rootScope.pageTitle = "Modification d'un niveau";
        $scope.alerts = {
            success: {},
            danger: {}
        };

        LevelFactory.getEditFormData($stateParams.id, function (level) {
            $scope.level = level;

            $rootScope.pageTitle = "Modification d'un niveau : " + $scope.level.name;
        });

        $scope.editLevel = function () {
            var name = $('input[name="name"]').val();

            LevelFactory.updateLevel($stateParams.id, {
                name: name,
            }, function (level) {
                $scope.alerts.success = {
                    show: true,
                    text: "Votre niveau a bien été modifié, vous allez être redirigé vers la liste des niveaux."
                };

                $timeout(function () {
                    $state.go('levels.index');
                }, 3000);
            });
        }
    }])
    .controller('LevelController@delete', ['$rootScope', '$scope', '$state', '$stateParams', 'LevelFactory', function ($rootScope, $scope, $state, $stateParams, LevelFactory) {
        if (confirm('Êtes-vous sûr de vouloir supprimer le niveau ?'))
        {
            LevelFactory.deleteLevel($stateParams.id, function () {
                $state.go('levels.index');
            });
        }
        else {
            $state.go('levels.index')
        }
    }]);
