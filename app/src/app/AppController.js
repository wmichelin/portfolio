(function(){
    var myApp = angular.module('myApp');
    myApp.controller('AppController', ['$scope', 'DataService', '$state', '$mdMedia', AppController]);

    function AppController($scope, dataService, $state, $mdMedia){
        $scope.$watch(function() { return !$mdMedia('gt-md'); }, function(small) {
            $scope.lessThanMedium = small;
        });
        dataService.loadData().
            then(
            function(data){
                $scope.title = data.person.name;
            }
        );
    }
})();
