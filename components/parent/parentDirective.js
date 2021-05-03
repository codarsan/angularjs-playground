'use strict';

angular.module('app')
  .directive('parent', function () {
    return {
      restrict: 'E',
      templateUrl: 'components/parent/parentTemplate.html',
      controller: 'parentController',
      scope: {}
    };
  });