(function(){
    'use strict';

    angular
    .module('controls')
    .factory('storageService', storageService);

    function storageService($window, $q) {
        var service = {
            setItem: setItem,
            getItem: getItem
        }
        return service;

        function setItem(item) {
            console.log(item)
            $window.localStorage.setItem('user', JSON.stringify(item));
            var user = JSON.parse($window.localStorage.getItem('user'));
            console.log('setItem',user);
            return $q.when(user);
        }

        function getItem() {
            var user = JSON.parse($window.localStorage.getItem('user'))
            console.log('getItem',user);
            return $q.when(user);
        }
    }
})();