'use strict';

angular.module('app')
  .directive('child', function () {
    return {
      restrict: 'E',
      templateUrl: 'components/child/childTemplate.html',
      controller: 'childController',
      scope: {
       obj: '='
      }
    };
  });