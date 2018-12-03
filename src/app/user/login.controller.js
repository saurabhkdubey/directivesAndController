(function(){
    'use strict';

    angular
    .module('user')
    .controller('Login',Login);

    function Login($state, storageService, _){
        var vm = this;
        vm.dataLoading = false;
        vm.login = login;
        vm.submit = submit;
        activate();
        function activate(){
            storageService.getItem().then((response, error)=>{
                if(error){
                    console.log('error while fetching data');
                    return;
                }
                vm.userService = response ? response : [];
                console.log('vm.userService',vm.userService);
            })
        }

        function login(){
            // if(vm.username === vm.userService.username && vm.password === vm.userService.password){
                console.log(true);
                _.find(vm.userService ,{username:vm.username, password: vm.password})? $state.go('home.welcome'): console.log('error');
                // $state.go('home.welcome');
                // return;
            
            console.log(vm.username);
            console.log(vm.password);
            // $state.go('home.welcome'); 
        }

        function submit(){
            vm.userService.push(vm.user);
            
            console.log(vm.userService);
            storageService.setItem(vm.userService).then((response)=>{
                console.log('response',response);
                $state.go('login');
            }).catch(error=>{
                console.log('error');
            });
            console.log(vm.user);
        }
    }
})();