/**
 * Created by walter.michelin on 8/7/15.
 */
(function(){
    angular.module('myApp')
        .service('DataService', ['$q', DataService]);

    function DataService($q){
        var data = {
            person: {
                'name': 'Walter Michelin',
                'body': 'Walter Michelin is a 22 year old software engineer currently working on his bachelor\'s degree in computer science at ' +
                        'The College of New Jersey'
            }
        };

        return {
            loadData : function () {
                return $q.when(data);
            }
        }

    }

})();
