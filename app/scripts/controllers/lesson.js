angular.module('app').controller('lessons', ['users', '$scope', '$state', '$rootScope', '$http', '$filter', 'config', function (users, $scope, $state, $rootScope, $http, $filter, config) {
	$("#selectedLevel").hide();
	$("#selectedSubject").hide();
	$("#selectedClasse").hide();
	$("#selectedReservation").hide();

	if ($state.current.data != null)
    	$rootScope.pageTitle = $state.current.data.pageTitle;

    $http({
			method: 'GET',
			url: config.apiUrl + "api/lessons/create"
		}).then(function successCallback(response) {
			$scope.lessons = response.data;
			$("#selectedLevel").show();
			console.log(response);
		}, function errorCallback(response) {
			console.log(response);
	});

	$scope.selectSubject = function () {
		$("#selectedSubject").show();
	};
	$scope.selectClasse = function () {
		$("#selectedClasse").show();
	};
	$scope.selectReservation = function () {
		$("#selectedReservation").show();
	};
	$scope.selectFinish = function () {
		$("#create").removeClass("disabled");
	};
    $scope.create = function () {    	
    	$http({
			method: 'POST',
			url: config.apiUrl + "api/lessons",
			data: {
				subject_id: $scope.selectedSubject.id,
				reservation_id: $("#reservation").val(),
				student_class_id: $scope.selectedClasse.id
			}
		}).then(function successCallback(response) {
			console.log(response);
		}, function errorCallback(response) {
			console.log(response);
		});
    };
}])
.controller('lessonsId', [ '$scope', '$state', '$rootScope', '$http', '$filter', '$stateParams', 'config', function ($scope, $state, $rootScope, $http, $filter, $stateParams, config) {
    $http({
			method: 'GET',
			url: config.apiUrl + "api/lessons/"+$stateParams.id
		}).then(function successCallback(response) {
			$scope.lesson = response.data;
			console.log(response);
		}, function errorCallback(response) {
			console.log(response);
	});

	$scope.create = function () {
		var file = {
					name: $("#name").val(),
					description: $("#description").val(),
					document: $("#document")[0].files[0]
				};
		$http({
			method: 'POST',
			url: config.apiUrl + "api/lessons/"+$stateParams.id+"/documents",
			data: file
		}).then(function successCallback(response) {
			$state.reload();
			console.log(response);
		}, function errorCallback(response) {
			console.log(response);
		});
	};

	$scope.createHW = function () {
		console.log($("#HWdescription").val());
		var file = {
					description: $("#HWdescription").val()
				};
		$http({
			method: 'POST',
			url: config.apiUrl + "api/lessons/"+$stateParams.id+"/homeworks",
			data: file
		}).then(function successCallback(response) {
			$state.reload();
			console.log(response);
		}, function errorCallback(response) {
			console.log(response);
		});
	};

	$scope.createExam = function () {
		console.log($("#examDescription").val());
		var file = {
					type: $("#examType").val(),
					min_mark: $("#examMin").val(),
					max_mark: $("#examMax").val(),
					description: $("#examDescription").val()
				};
		$http({
			method: 'POST',
			url: config.apiUrl + "api/lessons/"+$stateParams.id+"/exam",
			data: file
		}).then(function successCallback(response) {
			$state.reload();
			console.log(response);
		}, function errorCallback(response) {
			console.log(response);
		});
	};

	$scope.evaluations = function (key, student) {
		if ($("#student-"+key).find('.time-lesson').is(":hidden") && $("#student-"+key).find('.cross-lesson').is(":hidden"))
		{
			// Si en retard
			$("#student-"+key).find('.time-lesson').show();
			var file = {
					student_id: student.id
				};
			$http({
			method: 'POST',
			url: config.apiUrl + "api/lessons/"+$stateParams.id+"/evaluations",
			data: file
			}).then(function successCallback(response) {
				console.log(response);
			}, function errorCallback(response) {
				console.log(response);
			});

		}
		else if ($("#student-"+key).find('.time-lesson').is(":hidden") && $("#student-"+key).find('.cross-lesson').is(":visible"))
		{
			// Annulation de l'absence
			$("#student-"+key).find('.time-lesson').hide();
			$("#student-"+key).find('.cross-lesson').hide();
		}
		else
		{
			// Si absent
			$("#student-"+key).find('.time-lesson').hide();
			$("#student-"+key).find('.cross-lesson').show();
		}
	};
}])
.controller('lessonsIdStudent', ['users', '$scope', '$state', '$rootScope', '$http', '$filter', '$stateParams', 'config', function (users, $scope, $state, $rootScope, $http, $filter, $stateParams, config) {
    $http({
			method: 'GET',
			url: config.apiUrl + "api/lessons/"+$stateParams.id
		}).then(function successCallback(response) {
			$scope.lesson = response.data;
			if ($scope.lesson.exam.type == "home")
				$scope.hm=true;
			console.log(response);
		}, function errorCallback(response) {
			console.log(response);
	});
}]);