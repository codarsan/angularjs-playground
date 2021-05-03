'use strict';

angular.module('app').controller('childController', ['$scope', childController]);

function childController($scope) {
  $scope.obj = {
    nom: "test"
  }
  console.log($scope.obj);
  console.log('child: ', $scope);

}