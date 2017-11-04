angular.module('GroupsModule')
	.controller('GroupController@index', ['$rootScope', '$scope', '$state', 'GroupFactory', function ($rootScope, $scope, $state, GroupFactory) {
		$rootScope.pageTitle = "Groupes d'utilisateurs";

		GroupFactory.getGroups(function (groups) {
			$scope.groups = groups;
		});
	}])
	.controller('GroupController@create', ['$rootScope', '$scope', '$state', '$timeout', 'GroupFactory', function ($rootScope, $scope, $state, $timeout, GroupFactory) {
		$rootScope.pageTitle = "Ajouter un nouveau groupe d'utilisateurs";
		$scope.alerts = {
			success: {},
			danger: {}
		};

		GroupFactory.getCreateFormData(function (data) {
			$scope.accessRules = data.access_rules;
		});

		$scope.createGroup = function () {
			var name = $('input[name="name"]').val();
			var description = $('input[name="description"]').val();
			var accessRules = $scope.accessRules.filter(accessRule => accessRule.selected).map(accessRule => accessRule.id);

			GroupFactory.postGroup({
				name: name,
				description: description,
				access_rules: accessRules
			}, function (group) {
				$scope.alerts.success = {
					show: true,
					text: "Votre groupe a bien été enregistré, vous allez être redirigé vers sa page."
				};

				$timeout(function () {
					$state.go('groups.show', { id: group.id });
				}, 3000);
			});
		}
	}])
	.controller('GroupController@show', ['$rootScope', '$scope', '$state', '$stateParams', 'GroupFactory', function ($rootScope, $scope, $state, $stateParams, GroupFactory) {
		$rootScope.pageTitle = "Affichage d'un groupe";

		GroupFactory.getGroup($stateParams.id, function (group) {
			$scope.group = group;

			$rootScope.pageTitle = "Affichage d'un groupe : " + $scope.group.name;
		});
	}]);
