angular.module('app', ['routerApp', 'oauthApp', 'user', 'ui.bootstrap.datetimepicker'])
.controller('profil', ['users', '$http', '$rootScope', '$scope', 'OAuth', '$state', 'OAuth', function(users, $http, $rootScope, $scope, OAuth, $state) {
	if (!OAuth.isAuthenticated())
    	$state.go('login');
    else {
    	users.getUserFromData(function (response) {
			$rootScope.user = response;
			if ($rootScope.user.id != 4)
    			$rootScope.showEval = false;
    		else
    			$rootScope.showEval = true;
		})
    }
    $scope.imgUser = "/app/images/profil 2/bechad_p.bmp";
    $rootScope.pageTitle = 'Votre profil';
    if ($state.current.data != null)
    	$rootScope.pageTitle = $state.current.data.pageTitle;
}])
.controller('profilId', ['users', '$http', '$rootScope', '$scope', '$stateParams', 'OAuth', function(users, $http, $rootScope, $scope, $stateParams, OAuth) {
	if (!OAuth.isAuthenticated())
    	$state.go('login');
    else {
    	users.getUserFromData(function (response) {
			$rootScope.user = response;
	    	var tmpUser = users.getUserById($stateParams.id);
	    	$rootScope.pageTitle = 'Profil de ' + tmpUser.firstname + ' ' + tmpUser.lastname;
	    	$scope.user = tmpUser;
	    	$scope.imgUser = "/app/images/profil 2/bechad_p.bmp";
	    	if (tmpUser.id == 5)
	    		$scope.imgUser = "/app/images/profil 2/diafou_j.bmp";
	    	else if (tmpUser.id == 6)
	    		$scope.imgUser = "/app/images/profil 2/rio_s.bmp";
	    })
    }
}])
.controller('lessons', ['users', '$scope', '$state', '$rootScope', '$http', '$filter', function (users, $scope, $state, $rootScope, $http, $filter) {
	$("#selectedLevel").hide();
	$("#selectedSubject").hide();
	$("#selectedClasse").hide();
	$("#selectedReservation").hide();

	if ($state.current.data != null)
    	$rootScope.pageTitle = $state.current.data.pageTitle;

    $http({
			method: 'GET',
			url: "http://api.dev.smartfollow.org/api/lessons/create"
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
			url: "http://api.dev.smartfollow.org/api/lessons",
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
.controller('lessonsId', [ '$scope', '$state', '$rootScope', '$http', '$filter', '$stateParams', function ($scope, $state, $rootScope, $http, $filter, $stateParams) {
    $http({
			method: 'GET',
			url: "http://api.dev.smartfollow.org/api/lessons/"+$stateParams.id
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
			url: "http://api.dev.smartfollow.org/api/lessons/"+$stateParams.id+"/documents",
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
			url: "http://api.dev.smartfollow.org/api/lessons/"+$stateParams.id+"/homeworks",
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
			url: "http://api.dev.smartfollow.org/api/lessons/"+$stateParams.id+"/exam",
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
			url: "http://api.dev.smartfollow.org/api/lessons/"+$stateParams.id+"/evaluations",
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
.controller('lessonsIdStudent', ['users', '$scope', '$state', '$rootScope', '$http', '$filter', '$stateParams', function (users, $scope, $state, $rootScope, $http, $filter, $stateParams) {
    $http({
			method: 'GET',
			url: "http://api.dev.smartfollow.org/api/lessons/"+$stateParams.id
		}).then(function successCallback(response) {
			$scope.lesson = response.data;
			if ($scope.lesson.exam.type == "home")
				$scope.hm=true;
			console.log(response);
		}, function errorCallback(response) {
			console.log(response);
	});
}])
.controller('reservation', ['$scope', '$state', '$rootScope', '$http', '$filter', function ($scope, $state, $rootScope, $http, $filter) {
	$scope.button = "Créer";
	$(".edit").hide();
	if ($state.current.data != null)
    	$rootScope.pageTitle = $state.current.data.pageTitle;
    $scope.create = function () {
    	console.log($filter('date')($scope.data.date1, 'yyyy-MM-dd'));
    	console.log($filter('date')($scope.data.date1, 'HH:mm'));
    	console.log($filter('date')($scope.data.date2, 'yyyy-MM-dd'));
    	console.log($filter('date')($scope.data.date2, 'HH:mm'));
    	console.log($filter('date')(new Date(), 'EEEE').toUpperCase());
    	var room = $('#room_id').val();
    	var reservation = {
					room_id: room,
					time_start: $filter('date')($scope.data.date1, 'HH:mm'),
					time_end: $filter('date')($scope.data.date2, 'HH:mm'),
					date_start: $filter('date')($scope.data.date1, 'yyyy-MM-dd'),
					date_end: $filter('date')($scope.data.date2, 'yyyy-MM-dd'),
					day: $filter('date')(new Date(), 'EEEE').toUpperCase()
				};
   		$http({
			method: 'POST',
			url: "http://api.dev.smartfollow.org/api/reservations",
			data: reservation
		}).then(function successCallback(response) {
			console.log(response);
		}, function errorCallback(response) {
			console.log(response);
		});
	};
}])
.controller('reservationsId', ['$scope', '$state', '$rootScope', '$http', '$filter', '$stateParams', function ($scope, $state, $rootScope, $http, $filter, $stateParams) {
	$scope.button = "Editer";
	if ($state.current.data != null)
    	$rootScope.pageTitle = $state.current.data.pageTitle;
    $http({
			method: 'GET',
			url: "http://api.dev.smartfollow.org/api/reservations/" + $stateParams.id
		}).then(function successCallback(response) {
			$scope.reservation = response.data;
			$("#room_id").val(response.data.id);
			$("#date1").hide();
			$("#date2").hide();
			console.log(response);
		}, function errorCallback(response) {
			console.log(response);
	});

	$scope.editDate1 = function() {
		$("#edit1").hide();
		$("#date1").show();
	};

	$scope.editDate2 = function() {
		$("#edit2").hide();
		$("#date2").show();
	};

    $scope.create = function () {
    	console.log($filter('date')($scope.data.date1, 'yyyy-MM-dd'));
    	console.log($filter('date')($scope.data.date1, 'HH:mm'));
    	console.log($filter('date')($scope.data.date2, 'yyyy-MM-dd'));
    	console.log($filter('date')($scope.data.date2, 'HH:mm'));
    	console.log($filter('date')(new Date(), 'EEEE').toUpperCase());
    	var room = $('#room_id').val();
    	var reservation = {
					room_id: room,
					time_start: $filter('date')($scope.data.date1, 'HH:mm'),
					time_end: $filter('date')($scope.data.date2, 'HH:mm'),
					date_start: $filter('date')($scope.data.date1, 'yyyy-MM-dd'),
					date_end: $filter('date')($scope.data.date2, 'yyyy-MM-dd'),
					day: $filter('date')(new Date(), 'EEEE').toUpperCase()
				};
   		$http({
			method: 'POST',
			url: "http://api.dev.smartfollow.org/api/reservations",
			data: reservation
		}).then(function successCallback(response) {
			console.log(response);
		}, function errorCallback(response) {
			console.log(response);
		});
	};
}]);
