(function(){
  angular.module('myApp')
    .controller('PersonController',
      ['$scope', PersonController
    ]);

    function PersonController($scope){

      $scope.name = "Walter Michelin";

    }







})();
