(function () {
  'use strict';

  angular
    .module('home.welcome', ['ui.router',
      'home',
    ]).config(config);

  /* @ngInject */
  function config($stateProvider) {
    //, $collapseProvider) {
    $stateProvider
      .state('home.welcome', {
        url: '/',
        views: {
          '@': {
            templateUrl: 'app/welcome/welcome.tpl.html',
            controller: 'WelcomeCtrl as vm'
          }
        }
      });
  }
})();
