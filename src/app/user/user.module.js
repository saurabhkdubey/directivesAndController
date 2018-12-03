(function () {
  'use strict';

  angular
    .module('user', ['ui.router'])
    .config(config);

  function config($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('login', {
        url: '/login/',
        views: {
          'header@': {
            templateUrl: 'app/user/loginHeader.tpl.html',
            controller: 'LoginHeaderCtrl as vm'
          },
          '@': {
            templateUrl: 'app/user/login.html',
            controller: 'Login as vm'
          }
        }
      })
      .state('register', {
        url: '/register/',
        views: {
          'header@': {
            templateUrl: 'app/user/loginHeader.tpl.html',
            controller: 'LoginHeaderCtrl as vm'
          },
          '@': {
            templateUrl: 'app/user/register.tpl.html',
            controller: 'Login as vm'
          }
        }
      });
    //   .state('about', {
    //     url: '/about',
    //     templateUrl: 'app/about/about.tpl.html',
    //     controller: 'AboutCtrl',
    //     controllerAs: 'vm'
    //   })
    //   .state('contact', {
    //     url: '/contact',
    //     templateUrl: 'app/contact/contact.tpl.html',
    //     controller: 'ContactCtrl',
    //     controllerAs: 'vm'
    //   });

    // $urlRouterProvider.otherwise('/login/');
  }
})();
