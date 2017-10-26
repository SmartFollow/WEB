angular.module('app')
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

}]);
