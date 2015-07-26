(function(){
  var myApp = angular.module('myApp');
  myApp.controller('PersonController', ['$scope', 'PersonService', PersonController]);

    function PersonController($scope, personService){
      
      personService.loadPerson()
        .then(function(person){
          $scope.name = person.name;
      });

    }







})();
