(function() {
  'use strict';

  angular
    .module('lx-bi')
    .factory('Calendario',Calendario);

  Calendario.$inject = ['$resource'];

  function Calendario($resource){
    return $resource('http://localhost:8080/api/bi/calendarios.json');
  }

})();