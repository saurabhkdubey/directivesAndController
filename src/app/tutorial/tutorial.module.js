(function(){
    'use strict';

    angular
    .module('home.tutorial', ['home'
    ])
    .config(config);

    function config($stateProvider) {
        $stateProvider
          .state('home.tutorial', {
            url: 'tutorial/',
            abstract: true,
            views: {
              '@': {
                templateUrl: 'app/tutorial/tutorial.tpl.html',
                controller: 'TutorialCtrl as vm'
              }
            }
          })
          .state('home.tutorial.allCandidate', {
            url: 'allCandidate/',
            parent: 'home.tutorial',
            templateUrl: 'app/tutorial/tutorial.list.tpl.html'
          }).state('home.tutorial.card', {
            url: 'card',
            parent: 'home.tutorial.allCandidate',
            templateUrl: 'app/tutorial/candidate.cardview.html'
          }).state('home.tutorial.list', {
            url: 'list',
            parent: 'home.tutorial.allCandidate',
            templateUrl: 'app/tutorial/candidate.listview.html'
          });
      }
    //   function config($stateProvider) {
    //     //, $collapseProvider) {
    //     $stateProvider
    //       .state('home.tutorial', {
    //         url: 'tutorial/',
    //         views: {
    //           '@': {
    //             templateUrl: 'app/tutorial/tutorial.tpl.html',
    //             controller: 'TutorialCtrl as vm'
    //           }
    //         }
    //       });
    //   }
})();