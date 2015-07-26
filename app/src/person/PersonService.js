(function(){
  angular.module('myApp')
      .service('PersonService', ['$q', PersonService]);

  function PersonService($q){
    var data = {
      'name': 'Walter Michelin'
    }

    return {
      loadPerson : function () {
        return $q.when(data);
      }
    }

  }

})();
