angular.module('GraphsModule')
	.controller('GraphController', ['$scope', '$filter', '$http', 'config', function ($scope, $filter, $http, config) {
		$http({
			method: 'GET',
			url: config.apiUrl + "api/graphs"
		}).then(function successCallback(response) {
			$scope.graphs = response.data;
			var i = 0;
			var j = 0;
			var values = [];
			var weeks = [];
			var concat;
			var nameEval;
			console.log($scope.graphs);
			while (i < $scope.graphs.length) {
				nameEval = $scope.graphs[i].criterion.name;
				while (j < $scope.graphs[i].values.length) {
					concat = "";
					values.push($scope.graphs[i].values[j].sum);
					concat = $scope.graphs[i].values[j].week_start + " - " + $scope.graphs[i].values[j].week_end;
					weeks.push(concat);
					j++;
				}
				i++;
				j = 0;
			}
			console.log(response);
			var ctx = document.getElementById("myChart").getContext('2d');
			var myChart = new Chart(ctx, {
				type: 'bar',
				data: {
					labels: weeks,
					datasets: [{
						label: '# de ' + nameEval,
						data: values,
						backgroundColor: [
							'rgba(255, 99, 132, 0.2)',
							'rgba(54, 162, 235, 0.2)',
							'rgba(255, 206, 86, 0.2)',
							'rgba(75, 192, 192, 0.2)',
							'rgba(153, 102, 255, 0.2)',
							'rgba(255, 159, 64, 0.2)'
						],
						borderColor: [
							'rgba(255,99,132,1)',
							'rgba(54, 162, 235, 1)',
							'rgba(255, 206, 86, 1)',
							'rgba(75, 192, 192, 1)',
							'rgba(153, 102, 255, 1)',
							'rgba(255, 159, 64, 1)'
						],
						borderWidth: 1
					}]
				},
				options: {
					scales: {
						yAxes: [{
							ticks: {
								beginAtZero: true
							}
						}]
					}
				}
			})

		}, function errorCallback(response) {
			console.log(response);
		});

	}])
	.controller('GraphController@index', ['$rootScope', '$scope', '$state', 'GraphFactory', function ($rootScope, $scope, $state, GraphFactory) {
		$rootScope.pageTitle = "Graphiques";

		GraphFactory.getGraphs(function (graphs) {
			$scope.graphs = graphs;
		});
	}])
	.controller('GraphController@create', ['$rootScope', '$scope', '$state', '$timeout', 'GraphFactory', function ($rootScope, $scope, $state, $timeout, GraphFactory) {
		$rootScope.pageTitle = "Ajouter un nouveau graphique";
		$scope.alerts = {
			success: {},
			danger: {}
		};

		GraphFactory.getCreateFormData(function (data) {
			$scope.criteria = data.criteria;
			$scope.types = data.types;
		});

		$scope.createGraph = function () {
			var criterionId = $('select[name="criterion_id"]').val();
			var type = $('select[name="type"]').val();
			var daysRange = $('input[name="days_range"]').val();

			GraphFactory.storeGraph({
				criterion_id: criterionId,
				type: type,
				days_range: daysRange
			}, function (graph) {
				$scope.alerts.success = {
					show: true,
					text: "Votre graphique a bien été enregistré, vous allez être redirigé vers sa page."
				};

				$timeout(function () {
					$state.go('graphs.show', { id: graph.id });
				}, 3000);
			});
		}
	}])
	.controller('GraphController@show', ['$rootScope', '$scope', '$state', '$stateParams', 'GraphFactory', function ($rootScope, $scope, $state, $stateParams, GraphFactory) {
		$rootScope.pageTitle = "Affichage d'un graphique";

		GraphFactory.getGraph($stateParams.id, function (graph) {
			$scope.graph = graph;
		});
	}])
	.controller('GraphController@edit', ['$rootScope', '$scope', '$state', '$stateParams', '$timeout', 'GraphFactory', function ($rootScope, $scope, $state, $stateParams, $timeout, GraphFactory) {
		$rootScope.pageTitle = "Modification d'un graphique";
		$scope.alerts = {
			success: {},
			danger: {}
		};

		GraphFactory.getEditFormData($stateParams.id, function (data) {
			$scope.criteria = data.criteria;
			$scope.types = data.types;
			$scope.graph = data.graph;
		});

		$scope.editGraph = function () {
			var criterionId = $('select[name="criterion_id"]').val();
			var type = $('select[name="type"]').val();
			var daysRange = $('input[name="days_range"]').val();

			GraphFactory.updateGraph($scope.graph.id, {
				criterion_id: criterionId,
				type: type,
				days_range: daysRange
			}, function (graph) {
				$scope.alerts.success = {
					show: true,
					text: "Votre graphique a bien été modifié, vous allez être redirigé vers sa page."
				};

				$timeout(function () {
					$state.go('graphs.show', { id: graph.id });
				}, 3000);
			});
		}
	}])
	.controller('GraphController@delete', ['$rootScope', '$scope', '$state', '$stateParams', 'GraphFactory', function ($rootScope, $scope, $state, $stateParams, GraphFactory) {
		if (confirm('Êtes-vous sûr de vouloir supprimer le graphique ?'))
		{
			GraphFactory.deleteGraph($stateParams.id, function () {
				$state.go('graphs.index');
			});
		}
		else {
			$state.go('graphs.index')
		}
	}]);
