angular.module('CriteriaModule')
	.controller('CriterionController@index', ['$rootScope', '$scope', '$state', 'CriterionFactory', function ($rootScope, $scope, $state, CriterionFactory) {
		$rootScope.pageTitle = "Critères d'évaluation";

		CriterionFactory.getCriteria(function (criteria) {
			$scope.criteria = criteria;
		});
	}])
	.controller('CriterionController@create', ['$rootScope', '$scope', '$state', '$timeout', 'CriterionFactory', function ($rootScope, $scope, $state, $timeout, CriterionFactory) {
		$rootScope.pageTitle = "Ajouter un nouveau critère d'évaluation";
		$scope.alerts = {
			success: {},
			danger: {}
		};

		CriterionFactory.getCreateFormData(function (data) {
			$scope.impacts = data.impacts;
			$scope.stats_types = data.stats_types;
		});

		$scope.createCriterion = function () {
			var name = $('input[name="name"]').val();
			var impact = $('select[name="impact"]').val();
			var differenceLimitPercentage = $('input[name="difference_limit_percentage"]').val();
			var checkInterval = $('input[name="check_interval"]').val();
			var statsType = $('select[name="stats_type"]').val();

			CriterionFactory.storeCriterion({
				name: name,
				impact: impact,
				difference_limit_percentage: differenceLimitPercentage,
				check_interval: checkInterval,
				stats_type: statsType
			}, function (criterion) {
				$scope.alerts.success = {
					show: true,
					text: "Votre critère a bien été enregistré, vous allez être redirigé vers sa page."
				};

				$timeout(function () {
					$state.go('criteria.show', { id: criterion.id });
				}, 3000);
			});
		}
	}])
	.controller('CriterionController@show', ['$rootScope', '$scope', '$state', '$stateParams', 'CriterionFactory', function ($rootScope, $scope, $state, $stateParams, CriterionFactory) {
		$rootScope.pageTitle = "Affichage d'un groupe";

		CriterionFactory.getCriterion($stateParams.id, function (criterion) {
			$scope.criterion = criterion;

			$rootScope.pageTitle = "Affichage d'un critère : " + $scope.criterion.name;
		});
	}])
	.controller('CriterionController@edit', ['$rootScope', '$scope', '$state', '$stateParams', '$timeout', 'CriterionFactory', function ($rootScope, $scope, $state, $stateParams, $timeout, CriterionFactory) {
		$rootScope.pageTitle = "Modification d'un critère";
		$scope.alerts = {
			success: {},
			danger: {}
		};

		CriterionFactory.getEditFormData($stateParams.id, function (data) {
			$scope.criterion = data.criterion;
			$scope.impacts = data.impacts;
			$scope.stats_types = data.stats_types;

			$rootScope.pageTitle = "Modification d'un critère : " + $scope.criterion.name;
		});

		$scope.editCriterion = function () {
			var name = $('input[name="name"]').val();
			var impact = $('select[name="impact"]').val();
			var differenceLimitPercentage = $('input[name="difference_limit_percentage"]').val();
			var checkInterval = $('input[name="check_interval"]').val();
			var statsType = $('select[name="stats_type"]').val();

			CriterionFactory.updateCriterion($scope.criterion.id, {
				name: name,
				impact: impact,
				difference_limit_percentage: differenceLimitPercentage,
				check_interval: checkInterval,
				stats_type: statsType
			}, function (criterion) {
				$scope.alerts.success = {
					show: true,
					text: "Votre critère a bien été modifié, vous allez être redirigé vers sa page."
				};

				$timeout(function () {
					$state.go('criteria.show', { id: criterion.id });
				}, 3000);
			});
		}
	}])
	.controller('CriterionController@delete', ['$rootScope', '$scope', '$state', '$stateParams', 'CriterionFactory', function ($rootScope, $scope, $state, $stateParams, CriterionFactory) {
		if (confirm('Êtes-vous sûr de vouloir supprimer le critère ?'))
		{
			CriterionFactory.deleteCriterion($stateParams.id, function () {
				$state.go('criteria.index');
			});
		}
		else {
			$state.go('criteria.index')
		}
	}]);
