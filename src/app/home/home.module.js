(function(){
    'use strict';

    angular
    .module('home',['ui.router'])
    .config(config);

   
  function config($stateProvider, $urlRouterProvider) {
      console.log('home');
    $stateProvider
      .state('home', {
        abstract: true,
        url: '/home/',
        views: {
          'header@': {
            templateUrl: 'app/home/header.html',
            controller: 'Header as vm'
          }
        //   'footer@': {
        //     templateUrl: 'app/home/footer.html'
        //   }
        }
      });
    $urlRouterProvider.otherwise('/login/');
   
  }

})();