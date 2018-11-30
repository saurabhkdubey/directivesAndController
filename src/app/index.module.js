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
    'user',
    'home',
    'home.about',
    'home.contact'
  ])
    .constant('_', window._);

})();
