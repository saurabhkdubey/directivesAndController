(function() {
  'use strict';

  angular
    .module('controls')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
