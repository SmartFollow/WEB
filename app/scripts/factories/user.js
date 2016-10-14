(function () {
  'use strict';
  
  angular
    .module('user')
    .factory('User', User);

	function User() {
		var UserBase = {};
		return UserBase;
	}());

	// Si l'utilisateur est authentifié
	UserBase.isAuthenticated = function(){
    	return true;
	}

	// Récupère l'utilisateur courrant
	UserBase.get = function () {
	  var user = {};
	  user.roles = ;
	  return user;
	}

	// Si l'utilisateur a un role
	UserBase.isGranted = function (roles) {
		if (!roles) {
			roles = Object.create(UserBase.get().roles);
		}
		if (!UserBase.isAuthenticated() || !roles || roles.length === 0) {
			return false;
		}
		if (access == roles[0]) {
			return true;
		}
		roles.shift();
		return UserBase.isGranted(roles);
	};
	return UserBase;
}