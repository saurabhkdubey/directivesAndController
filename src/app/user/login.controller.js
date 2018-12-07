(function(){
    'use strict';

    angular
    .module('user')
    .controller('Login',Login);

    function Login($state, storageService, _, toastr){
        var vm = this;
        vm.dataLoading = false;
        vm.login = login;
        vm.submit = submit;
        activate();
        function activate(){
            storageService.getItem().then(function(response){
                vm.userService = response ? response : [];
                console.log('vm.userService',vm.userService);
            }, function(error){
                console.log('error');
            })
        }

        function login(){
                _.find(vm.userService ,{username:vm.username, password: vm.password})? (function(){
                    $state.go('home.welcome');
                    toastr.success('login successfully !...');
                })(): console.log('error');
        }

        function submit(){
            vm.userService.push(vm.user);
            console.log(vm.userService);
            storageService.setItem(vm.userService).then(function(response){
                toastr.success('registration successfully !...');
                $state.go('login');
            }).catch(function(error){
                console.log('error');
            });
            console.log(vm.user);
        }
    }
})();