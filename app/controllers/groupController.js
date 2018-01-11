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
			$scope.accessRulesList = data.access_rules;
		});

		$scope.createGroup = function () {
			var name = $('input[name="name"]').val();
			var description = $('input[name="description"]').val();
			var accessRules = $scope.accessRulesList.filter(accessRule => accessRule.selected).map(accessRule => accessRule.id);

			GroupFactory.storeGroup({
				name: name,
				description: description,
				access_rules: accessRules
			}, function (group) {
				$scope.alerts.success = {
					show: true,
					text: "Le groupe a bien été enregistré, vous allez être redirigé vers sa page."
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
	}])
	.controller('GroupController@edit', ['$rootScope', '$scope', '$state', '$stateParams', '$timeout', 'GroupFactory', function ($rootScope, $scope, $state, $stateParams, $timeout, GroupFactory) {
		$rootScope.pageTitle = "Modification d'un groupe";
		$scope.alerts = {
			success: {},
			danger: {}
		};

		GroupFactory.getEditFormData($stateParams.id, function (data) {
			$scope.group = data.group;
			$scope.accessRulesList = data.access_rules;

			var activeRulesIds = $scope.group.access_rules.map(rule => rule.id);
			for (var i = 0; i < $scope.accessRulesList.length; i++) {
				$scope.accessRulesList[i].selected = activeRulesIds.includes($scope.accessRulesList[i].id);
			}

			$rootScope.pageTitle = "Modification d'un groupe : " + $scope.group.name;
		});

		$scope.editGroup = function () {
			var name = $('input[name="name"]').val();
			var description = $('input[name="description"]').val();
			var accessRules = $scope.accessRulesList.filter(accessRule => accessRule.selected).map(accessRule => accessRule.id);

			GroupFactory.updateGroup($stateParams.id, {
				name: name,
				description: description,
				access_rules: accessRules
			}, function (group) {
				$scope.alerts.success = {
					show: true,
					text: "Le groupe a bien été modifié, vous allez être redirigé vers sa page."
				};

				$timeout(function () {
					$state.go('groups.show', { id: group.id });
				}, 3000);
			});
		}
	}])
	.controller('GroupController@delete', ['$rootScope', '$scope', '$state', '$stateParams', 'GroupFactory', function ($rootScope, $scope, $state, $stateParams, GroupFactory) {
		if (confirm('Êtes-vous sûr de vouloir supprimer le groupe ?'))
		{
			GroupFactory.deleteGroup($stateParams.id, function () {
				$state.go('groups.index');
			});
		}
		else {
			$state.go('groups.index')
		}
	}]);
