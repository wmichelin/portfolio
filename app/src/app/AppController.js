(function(){
    var myApp = angular.module('myApp');
    myApp.controller('AppController', ['$scope', 'DataService', '$state', AppController]);

    function AppController($scope, dataService){
        dataService.loadData().
            then(
            function(data){
                $scope.title = data.person.name;
            }
        );
    }
})();
