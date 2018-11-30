(function(){
    'use strict';

    angular
    .module('user')
    .controller('LoginHeaderCtrl',LoginHeaderCtrl);

    function LoginHeaderCtrl(){
        var vm = this;
        vm.welcome= "Saurabh Kumar";
    }
})();