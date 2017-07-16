angular.module('app')
.controller('lessonsCreate', ['users', '$scope', '$state', '$rootScope', '$http', '$filter', 'config', '$timeout', function (users, $scope, $state, $rootScope, $http, $filter, config, $timeout) {
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
			$(".alert-success").show();
			$timeout(function() {
		      $state.go('planning');
		    }, 3000);
			console.log(response);
		}, function errorCallback(response) {
			$(".alert-danger").show();
			console.log(response);
		});
    };
}])
.controller('lessonsEdit', [ '$scope', '$state', '$rootScope', '$http', '$filter', '$stateParams', 'config', function ($scope, $state, $rootScope, $http, $filter, $stateParams, config) {

	if ($state.current.data != null)
    	$rootScope.pageTitle = $state.current.data.pageTitle;

    $http({
			method: 'GET',
			url: config.apiUrl + "api/lessons/create"
		}).then(function successCallback(response) {
			$scope.lessons = response.data;

			$http({
					method: 'GET',
					url: config.apiUrl + "api/lessons/" + $stateParams.id
				}).then(function successCallback(response) {
					$scope.lesson = response.data;
					var level = getObjectById($scope.lessons.levels, response.data.student_class.level_id);
					$scope.selectedLevel = level;
					console.log(level);
					var subject = getObjectById(level.subjects, response.data.subject_id);
					$scope.selectedSubject = subject;
					$scope.selectedClasse = getObjectById(subject.student_classes, response.data.student_class_id);
					console.log(response);
				}, function errorCallback(response) {
					console.log(response);
			});


			console.log(response);
		}, function errorCallback(response) {
			console.log(response);
	});

	function getObjectById(objects, id)
	{
		 for (var i = 0; i < objects.length++; i++) {
			if (objects[i].id == id)
			{
				return (objects[i]);
			}
		};
		return (null);
	}

    $scope.edit = function () {    	
    	$http({
			method: 'PUT',
			url: config.apiUrl + "api/lessons/" + $stateParams.id,
			data: {
				subject_id: $scope.selectedSubject.id,
				reservation_id: $("#reservation").val(),
				student_class_id: $scope.selectedClasse.id,
				id: $stateParams.id
			}
		}).then(function successCallback(response) {
			console.log(response);
		}, function errorCallback(response) {
			console.log(response);
		});
    };
}])
.controller('lessonsDelete', [ '$scope', '$state', '$rootScope', '$http', '$filter', '$stateParams', 'config', function ($scope, $state, $rootScope, $http, $filter, $stateParams, config) {
	$http({
			method: 'DELETE',
			url: config.apiUrl + "api/lessons/" + $stateParams.id,
			data: {id: $stateParams.id}
		}).then(function successCallback(response) {
			console.log(response);
		}, function errorCallback(response) {
			console.log(response);
	});

}])
.controller('lessonsId', [ '$scope', '$state', '$rootScope', '$http', '$filter', '$stateParams', 'config', function ($scope, $state, $rootScope, $http, $filter, $stateParams, config) {
    $http({
			method: 'GET',
			url: config.apiUrl + "api/lessons/"+$stateParams.id
		}).then(function successCallback(response) {
			$scope.lesson = response.data;
			console.log(response);

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
		}, function errorCallback(response) {
			console.log(response);
			alert("Sorry, the lesson you are looking for could not be found.");
			$state.go('profil-teacher');
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

	$scope.createDocument = function () {
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

	$scope.editDocument = function (document, type) {
		if (type == "modal")
		{
			$('#modal-upload-edit-'+document.id).modal();
		}
		else if (type == "send")
		{
			var file = {
				name: $("#name").val(),
				description: $("#description").val(),
				document: $("#document")[0].files[0],
				id: document.id
			};
			$http({
				method: 'PUT',
				url: config.apiUrl + "api/lessons/"+$stateParams.id+"/documents",
				data: file
			}).then(function successCallback(response) {
				$state.reload();
				console.log(response);
			}, function errorCallback(response) {
				console.log(response);
			});
		}
	};

	$scope.deleteDocument = function (document) {
		var param = {
			id: document.id
		};
		$http({
			method: 'DELETE',
			url: config.apiUrl + "api/lessons/"+$stateParams.id+"/documents",
			data: param
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

	$scope.editHW = function (homework, type) {
		$("#HWdescription").val(homework.description);
		

		if (type == "modal")
		{
			$('#modal-upload-homework-'+homework.id).modal();
		}
		else if (type == "send")
		{
			var file = {
						description: $("#HWdescription").val(),
						id: homework.id
					};
			$http({
				method: 'PUT',
				url: config.apiUrl + "api/lessons/"+$stateParams.id+"/homeworks",
				data: file
			}).then(function successCallback(response) {
				$state.reload();
				console.log(response);
			}, function errorCallback(response) {
				console.log(response);
			});
		}
	};

	$scope.deleteHW = function (homework) {
		var param = {
					id: homework.id
				};
		$http({
			method: 'DELETE',
			url: config.apiUrl + "api/lessons/"+$stateParams.id+"/homeworks",
			data: param
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

	$scope.deleteExam = function () {
		$http({
			method: 'DELETE',
			url: config.apiUrl + "api/lessons/"+$stateParams.id+"/exam"
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
				// Si absent
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
		else if ($("#student-"+key).find('.time-lesson').is(":visible") && $("#student-"+key).find('.cross-lesson').is(":hidden"))
			{
				// Annulation de l'absence
				$("#student-"+key).find('.time-lesson').hide();
				$("#student-"+key).find('.cross-lesson').hide();
				$http({
					method: 'DELETE',
					url: config.apiUrl + "api/evaluations/"+student.evaluation.id+"/delays",
					data: {
						id: student.evaluation.id
					}
				}).then(function successCallback(response) {
					console.log(response);
				}, function errorCallback(response) {
					console.log(response);
				});
			}
		else
			{
				// Si en retard
				$("#student-"+key).find('.cross-lesson').hide();
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