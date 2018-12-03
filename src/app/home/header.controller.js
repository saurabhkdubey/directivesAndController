(function(){
    'use strict';

    angular.module('home')
    .controller('Header', Header);

    function Header($state){
        console.log("header");
        var vm = this;
        vm.data = [{
            name:"portfolio",
            icon:'document',
            state:"home.portfolio"
        },{
            name:"about",
            icon:'home',
            state:"home.about"
        },{
            name: "contact",
            icon: "contact",
            state: "home.contact"
        }];
        vm.click = click;
        function click(){
            $state.go('login');
        }
        console.log(vm.data);
    }
})();