angular.module('app')
	.directive('graph', function () {
		return {
			restrict: 'E',
			replace: true,
			scope: {
				graphs: '=data'
			},
			link: function (scope, elt, attr) {
				scope.$watch('graphs', function (graphs) {
					if (graphs)
					{
						var labels = [];
						var datasets = {};

						graphs.forEach(function (graph) { // Generating the list of datasets
							datasets[graph.id] = {
								label: graph.criterion.name,
								data: {},
								type: graph.type,
								backgroundColor: intToRGBA(hashCode(graph.criterion.name), 0.2),
								borderColor: intToRGBA(hashCode(graph.criterion.name), 1),
								borderWidth: 1
							};
						});

						graphs.forEach(function (graph) { // Filling the values for each dataset
							graph.values.forEach(function (value) {
								if (!labels.includes(value.week_start + ' - ' + value.week_end))
									labels.push(value.week_start + ' - ' + value.week_end);

								$.each(datasets, function (idx, dataset) {
									if (!dataset['data'][value.week_start + ' - ' + value.week_end])
										dataset['data'][value.week_start + ' - ' + value.week_end] = 0;
								});
							});

							graph.values.forEach(function (value) {
								datasets[graph.id]['data'][value.week_start + ' - ' + value.week_end] = parseFloat(graph.criterion.stats_type == 'sum' ? value.sum : value.average);
							});
						});

						$.each(datasets, function (idx, dataset) { // Transforming object to array for datasets[data]
							dataset['data'] = $.map(dataset['data'], function (idx, value) {
								return idx;
							});
						});

						datasets = $.map(datasets, function (idx, value) { // Transforming object to array for datasets
							return idx;
						});

						var context = $('#graph-criteria')[0].getContext('2d');
						var chart = new Chart(context, {
							type: 'bar',
							data: {
								labels: labels,
								datasets: datasets
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
					}
				});
			},
			template: '<canvas id="graph-criteria"></canvas>'
		}
	});

/*
 * Functions used to generate a random color from a string (the name of the subject)
 */
function hashCode(str) {
	var hash = 0;
	for (var i = 0; i < str.length; i++) {
		hash = str.charCodeAt(i) + ((hash << 5) - hash);
	}
	return hash;
}

function cutHex(h) { return (h.charAt(0) == "#") ? h.substring(1,7) : h }

function intToRGBA(i, a){
	var c = (i & 0x00FFFFFF)
		.toString(16)
		.toUpperCase();

	var hex = "00000".substring(0, 6 - c.length) + c;

	var r = parseInt((cutHex(hex)).substring(0,2),16);
	var g = parseInt((cutHex(hex)).substring(2,4),16);
	var b = parseInt((cutHex(hex)).substring(4,6),16);

	return 'rgba(' + r + ', ' + g + ', ' + b + ', ' + a + ')';
}