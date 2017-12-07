angular.module('app')
	.directive('graph', function () {
		return {
			restrict: 'E',
			replace: true,
			scope: {
				graph: '=data'
			},
			link: function (scope, elt, attr) {
				scope.$watch('graph', function (graph) {
					var labels = [];
					var values = [];

					graph.values.forEach(function (value) {
						values.push(graph.criterion.stats_type == 'sum' ? value.sum : value.average);
						labels.push(value.week_start + ' - ' + value.week_end);
					});

					var context = $('#graph-' + graph.id)[0].getContext('2d');
					var chart = new Chart(context, {
						type: graph.type,
						data: {
							labels: labels,
							datasets: [{
								label: '# de ' + graph.criterion.name.toLowerCase(),
								data: values,
								backgroundColor: 'rgba(255, 99, 132, 0.2)',
								borderColor: 'rgba(255,99,132,1)',
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
					});
				})
			},
			template: '<canvas id="graph-{{ graph.id }}"></canvas>'
		}
	});