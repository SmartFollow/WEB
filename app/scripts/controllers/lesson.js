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

	$http({
			method: 'GET',
			url: config.apiUrl + "api/lessons/"+$stateParams.id+"/evaluations/create"
		}).then(function successCallback(response) {
			$scope.evaluations = response.data;
			angular.forEach($scope.lesson.student_class.students, function(student, key) {
			  student.criteria = angular.copy($scope.evaluations.criteria);
			  angular.forEach(student.criteria, function(criteria, key) {
			  	criteria.value = 0;
			  });
			});
			console.log(response);
		}, function errorCallback(response) {
			console.log(response);
	});

	 $scope.tabClick = function (nb) {
	 	var button = $(".breadcrumb li").eq(nb);
	    if (!button.hasClass("legend"))
	    {
	    	var id = $(".breadcrumb li").index(button) - 1;
	    	var tab = $(".tab .tab-pane").eq(id);
	   		tab.show();
		    var prevId = $(".breadcrumb").find(".active").index() - 1;
		    var prevTab = $(".tab .tab-pane").eq(prevId);
		    prevTab.hide();
	      	$(".breadcrumb").find(".active").removeClass("active");
	    }
	};

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

	$scope.postEvaluationCriteria = function (criteria, student) {
		$http({
			method: 'POST',
			url: config.apiUrl + "api/evaluations/"+student.evaluation.id+"/criteria",
			data: {
				criterion_id: criteria.id,
				value: "1"
			}
		}).then(function successCallback(response) {
			console.log(response);
		}, function errorCallback(response) {
			console.log(response);
		});
	};

	$scope.createEvaluationsByCriteria = function (criteria, student) {
		criteria.value += 1;
		if (angular.isUndefined(student.evaluation))
		{
		var file = {
			student_id: student.id,
			lesson_id: $stateParams.id
		};
		$http({
			method: 'POST',
			url: config.apiUrl + "api/evaluations",
			data: file
			}).then(function successCallback(response) {
				student.evaluation = response.data;
				console.log(response);
				$scope.postEvaluationCriteria(criteria, student);
			}, function errorCallback(response) {
				console.log(response);
		});
		}
		else
			$scope.postEvaluationCriteria(criteria, student);

	};

	$scope.postEvaluation = function (key, student)
	{
		if ($("#student-"+key).find('.time-lesson').is(":hidden") && $("#student-"+key).find('.cross-lesson').is(":hidden"))
			{
				// Si en retard
				$("#student-"+key).find('.time-lesson').show();
				
				var currentTime = new Date();

		    	$http({
					method: 'POST',
					url: config.apiUrl + "api/evaluations/"+student.evaluation.id+"/delays",
					data: {
						arrived_at: currentTime.getHours() + ":" + currentTime.getMinutes()
					}
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

				$http({
					method: 'POST',
					url: config.apiUrl + "api/evaluations/"+student.evaluation.id+"/absences"
				}).then(function successCallback(response) {
					console.log(response);
				}, function errorCallback(response) {
					console.log(response);
				});
			}
	};

	$scope.createEvaluations = function (key, student) {

		if (angular.isUndefined(student.evaluation))
		{
			var file = {
				student_id: student.id,
				lesson_id: $stateParams.id
			};

			$http({
				method: 'POST',
				url: config.apiUrl + "api/evaluations",
				data: file
				}).then(function successCallback(response) {
					student.evaluation = response.data;
					console.log(response);
					$scope.postEvaluation(key, student);
			}, function errorCallback(response) {
					console.log(response);
			});
		}
		else
			$scope.postEvaluation(key, student);
	}
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