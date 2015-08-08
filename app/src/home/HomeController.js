(function(){
  var myApp = angular.module('myApp');
  myApp.controller('HomeController', ['$scope', 'DataService', '$state', HomeController]);

    function HomeController($scope, dataService){
      dataService.loadData().
        then(
            function(data){
                $scope.person = data.person;

            }
        );
    }







})();
