(function () {
  'use strict';

  angular
    .module('controls')
    .directive('controlsDirective', controlsDirective);

  function controlsDirective() {
    return {
      restrict: 'E',
      transclude: true,
      replace: true,
      scope: {
        tasks: '=',
        actionClicked: '='
      },
      controller: ControlsDirectiveCtrl,
      controllerAs: 'vm',
      templateUrl: 'app/main/controls.tpl.html'
    };
  }

  function ControlsDirectiveCtrl($scope) {
      var vm = this;
      console.log(!$scope.tasks);
      vm.clickFunction= clickFunction;
      function clickFunction(item){
          console.log('hello');
          console.log($scope);
          $scope.actionClicked(item);
      }
    // $scope.addTask = function () {
    //   if (!$scope.tasks) $scope.tasks = [];

    //   $scope.tasks.push({
    //     title: $scope.title
    //   });

    // };

  }
})();
