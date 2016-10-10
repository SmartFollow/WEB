(function () {
  'use strict';

  angular
    .module('forbidden')
    .controller('ForbiddenCtrl', ForbiddenCtrl);

  function ForbiddenCtrl() {
    var vm = this;
    vm.ctrlName = 'ForbiddenCtrl';
  }
}());