/**
 * Created by walter.michelin on 8/7/15.
 */
(function(){
    var myApp = angular.module('myApp');

    myApp.config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');
        $stateProvider
            .state("home", {
            url: '/',
            templateUrl: 'src/home/HomeTemplate.html',
            controller: "HomeController",
            data: {}
        });
    });
})();

