'use strict';

angular.module('app').controller('parentController', ['$scope', parentController]);

function parentController($scope) {
  $scope.obj = {
    nom: 'Bonjour'
  };
  console.log('parent: ', $scope);
}