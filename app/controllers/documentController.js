angular.module('DocumentsModule')
	.controller('DocumentController@show', ['$rootScope', '$scope', '$stateParams', 'config', 'DocumentFactory', function ($rootScope, $scope, $stateParams, config, DocumentFactory) {

	}])
	.controller('DocumentController@create', ['$rootScope', '$scope', '$stateParams', 'config', 'DocumentFactory', function ($rootScope, $scope, $stateParams, config, DocumentFactory) {
		$scope.createDocument = {};

		$scope.storeDocument = function () {
			var formData = new FormData();
			formData.append('name', $scope.createDocument.name);
			formData.append('description', $scope.createDocument.description);
			formData.append('document', $('input[name="document_file"]')[0].files[0]);

			DocumentFactory.storeDocument($stateParams.id, formData, function (document) {
				$scope.createDocument = {};

				$scope.lesson.documents.push(document);

				$rootScope.globalAlerts.push({ type: 'success', text: 'Votre document a bien été ajouté.' });
				$('#modal-document-create').modal('hide');
			});
		}
	}])
	.controller('DocumentController@edit', ['$rootScope', '$scope', '$stateParams', 'config', 'DocumentFactory', function ($rootScope, $scope, $stateParams, config, DocumentFactory) {
		$scope.updateDocument = function () {
			DocumentFactory.updateDocument($scope.editDocument.id, {
				name: $scope.editDocument.name,
				description: $scope.editDocument.description
			}, function (document) {
				$scope.editDocument = document;

				$rootScope.globalAlerts.push({ type: 'success', text: 'Votre document a bien été modifié.' });
				$('#modal-document-edit').modal('hide');
			});
		}
	}])
	.controller('DocumentController@delete', ['$rootScope', '$scope', '$stateParams', 'config', '$state', 'DocumentFactory', function ($rootScope, $scope, $stateParams, config, $state, DocumentFactory) {
		if (confirm('Êtes-vous sûr de vouloir supprimer le document ?'))
		{
			DocumentFactory.deleteDocument($stateParams.id, function () {
				$state.go('lessons.show', { id: $stateParams.lessonId });
			});
		}
		else {
			$state.go('lessons.show', { id: $stateParams.lessonId });
		}
	}]);
