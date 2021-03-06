angular.module('HomeworksModule')
.controller('HomeworkController@show', ['$rootScope', '$scope', '$stateParams', 'config', 'HomeworkFactory', function ($rootScope, $scope, $stateParams, config, HomeworkFactory) {

	}])
	.controller('HomeworkController@create', ['$rootScope', '$scope', '$stateParams', 'config', 'HomeworkFactory', function ($rootScope, $scope, $stateParams, config, HomeworkFactory) {
		$scope.createHomework = {};

		$scope.storeHomework = function () {
			HomeworkFactory.storeHomework($stateParams.id, {
				description: $scope.createHomework.description,
				document_id: $scope.createHomework.document_id
			}, function (homework) {
				$scope.createHomework = {};

				$scope.lesson.homeworks.push(homework);

				$rootScope.globalAlerts.push({ type: 'success', text: 'Votre devoir maison a bien été ajouté.' });
				$('#modal-homework-create').modal('hide');
			});
		}
	}])
	.controller('HomeworkController@edit', ['$rootScope', '$scope', '$stateParams', 'config', 'HomeworkFactory', function ($rootScope, $scope, $stateParams, config, HomeworkFactory) {
		$scope.updateHomework = function () {
			HomeworkFactory.updateHomework($stateParams.id, $scope.editHomework.id, {
				description: $scope.editHomework.description,
				document_id: $scope.editHomework.document_id || undefined
			}, function (homework) {
				$scope.editHomework = homework;

				$scope.lesson.homeworks[$scope.lesson.homeworks.findIndex(e => e.id == homework.id)] = homework;

				$rootScope.globalAlerts.push({ type: 'success', text: 'Votre devoir maison a bien été modifié.' });
				$('#modal-homework-edit').modal('hide');
			});
		}
	}])
	.controller('HomeworkController@delete', ['$rootScope', '$scope', '$stateParams', 'config', '$state', 'HomeworkFactory', function ($rootScope, $scope, $stateParams, config, $state, HomeworkFactory) {
		if (confirm('Êtes-vous sûr de vouloir supprimer le devoir ?'))
		{
			HomeworkFactory.deleteHomework($stateParams.lessonId, $stateParams.id, function () {
				$state.go('lessons.show', { id: $stateParams.lessonId });
			});
		}
		else {
			$state.go('lessons.show', { id: $stateParams.lessonId });
		}
	}]);
