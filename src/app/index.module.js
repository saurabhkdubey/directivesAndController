(function() {
  'use strict';

  angular
    .module('controls', ['ngAnimate', 
    'ngCookies', 
    'ngTouch',
    'ngSanitize',
    'ngMessages',
    'ngAria',
    'ngResource',
    'ui.router',
    'ui.bootstrap',
    'toastr',
    'textAngular',
    'ui.ace',
    'user',
    'home',
    'home.welcome',
    'home.about',
    'home.contact',
    'home.tutorial'
  ])
    .constant('_', window._);

})();
