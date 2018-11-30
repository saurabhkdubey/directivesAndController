(function () {
  'use strict';

  angular
    .module('home.contact', ['ui.router',
      'home',
    ]).config(config);

  /* @ngInject */
  function config($stateProvider) {
    //, $collapseProvider) {
    $stateProvider
      .state('home.contact', {
        url: 'contact/',
        views: {
          '@': {
            templateUrl: 'app/contact/contact.tpl.html',
            controller: 'ContactCtrl as vm'
          }
        }
      });
  }
})();
