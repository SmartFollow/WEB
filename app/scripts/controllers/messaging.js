angular.module('app').controller('messaging', ['users', '$scope', '$state', '$rootScope', '$http', '$filter', 'config', '$q', function (users, $scope, $state, $rootScope, $http, $filter, config, $q) {
  
	if ($state.current.data != null)
    	$rootScope.pageTitle = $state.current.data.pageTitle;

  /*
  $http.get(config.apiUrl + "api/users").success(function (data) {
  	console.log(data);
  	$scope.users = data;
  });*/

    $http({
			method: 'GET',
			url: config.apiUrl + "api/conversations"
		}).then(function successCallback(response) {
			$scope.conversations = response.data;
			console.log(response);
		}, function errorCallback(response) {
			console.log(response);
	});

    $scope.formatDate = function(date){
          var dateOut = new Date(date);
          return dateOut;
    };

    $scope.displayCreateConversation = function(){
    	$("#create_conversation").toggle();
	}

	function getUserByEmail(email, users)
	{
		var tmpUser = null;
		angular.forEach(users, function(u, key) {
			if (u.email == email)
				tmpUser = u;
		});
		return tmpUser;
	}

	$scope.createConversation = function(){
		var ids = [];
		angular.forEach($scope.tags, function(tag, key) {
		  	this.push(tag.id);
		}, ids);
		var message = {
					subject: $("#subject").val(),
					participants: ids
				};
		$http({
			method: 'POST',
			url: config.apiUrl + "api/conversations",
			data: message
		}).then(function successCallback(response) {
			$state.reload();
		}, function errorCallback(response) {
			console.log(response);
		});
	}

	$scope.deleteConversation = function(){
	$http({
			method: 'DELETE',
			url: config.apiUrl + "api/conversations/" + $(".ng-scope .selected").attr('id')
		}).then(function successCallback(response) {
			$state.reload();
		}, function errorCallback(response) {
			console.log(response);
	});
	}

  $scope.sendMessage = function(){
    	var id = $('#conversation_id').html();
    	var msg = $("#msg_content").val();
		var message = {
					conversation_id: id,
					content:msg
				};
		$http({
			method: 'POST',
			url: config.apiUrl + "api/messages",
			data: message
		}).then(function successCallback(response) {
			$scope.messages.messages.push(response.data);
			$("#msg_content").val("");
			console.log(response);
		}, function errorCallback(response) {
			console.log(response);
		});
  };

$scope.loadMyScript = function()
{
  // Jquery
  var cols = {},
  messageIsOpen = false;
  cols.showOverlay = function() {
    $('body').addClass('show-main-overlay');
  };
  cols.hideOverlay = function() {
    $('body').removeClass('show-main-overlay');
  };
  cols.showMessage = function() {
    $('body').addClass('show-message');
    messageIsOpen = true;
  };
  cols.hideMessage = function() {
    $('body').removeClass('show-message');
    $('#main .message-list li').removeClass('active');
    messageIsOpen = false;
  };
  cols.showSidebar = function() {
    $('body').addClass('show-sidebar');
  };
  cols.hideSidebar = function() {
    $('body').removeClass('show-sidebar');
  };


  // Show sidebar when trigger is clicked

  $('.trigger-toggle-sidebar').on('click', function() {
    cols.showSidebar();
    cols.showOverlay();
  });


  $('.trigger-message-close').on('click', function() {
    cols.hideMessage();
    cols.hideOverlay();
  });


  // When you click on a message, show it

  $('#main .message-list li').on('click', function(e) {
    var item = $(this),
      target = $(e.target);
    if (item.is('li#create_conversation'))
      return(null);
    if(target.is('label')) {
      {
        item.toggleClass('selected');
      }
    } else {
      if(messageIsOpen && item.is('.active')) {
        cols.hideMessage();
        cols.hideOverlay();
      } else {
        if(messageIsOpen) {
          cols.hideMessage();
          item.addClass('active');
            $http({
					method: 'GET',
					url: config.apiUrl + "api/conversations/" + item.attr('id')
				}).then(function successCallback(response) {
					$scope.messages = response.data;
					console.log(response);
				}, function errorCallback(response) {
					console.log(response);
			});
          setTimeout(function() {
            cols.showMessage();
          }, 300);
        } else {
        	$http({
					method: 'GET',
					url: config.apiUrl + "api/conversations/" + item.attr('id')
				}).then(function successCallback(response) {
					$scope.messages = response.data;
					console.log(response);
					item.addClass('active');
          			cols.showMessage();
				}, function errorCallback(response) {
					console.log(response);
			});
        }
        cols.showOverlay();
      }
    }
  });


  // This will prevent click from triggering twice when clicking checkbox/label

  $('input[type=checkbox]').on('click', function(e) {
    e.stopImmediatePropagation();
  });



  // When you click the overlay, close everything

  $('#main > .overlay').on('click', function() {
    cols.hideOverlay();
    cols.hideMessage();
    cols.hideSidebar();
  });


  // Search box responsive stuff

  $('.search-box input').on('focus', function() {
    if($(window).width() <= 1360) {
      cols.hideMessage();
    }
  });
}
}]);