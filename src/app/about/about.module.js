(function(){
    'use strict';

    angular
    .module('home.about', ['home',
        'textAngular',
        'ui.ace'
    ])
    .config(config);

    function config($stateProvider) {
        //, $collapseProvider) {
        $stateProvider
          .state('home.about', {
            url: 'about/',
            views: {
              '@': {
                templateUrl: 'app/about/about.tpl.html',
                controller: 'AboutCtrl as vm'
              }
            }
          });
      }
})();