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
				$scope.lesson.documents.push(document);
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
