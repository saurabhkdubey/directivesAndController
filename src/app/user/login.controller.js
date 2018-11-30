(function(){
    'use strict';

    angular
    .module('user')
    .controller('Login',Login);

    function Login($state){
        var vm = this;
        vm.login = login;

        function login(){
            $state.go('home.contact'); 
        }
    }
})();