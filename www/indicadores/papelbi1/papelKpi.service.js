(function() {
  'use strict';

  angular
    .module('lx-bi')
    .factory('PapelKpi',PapelKpi);

  PapelKpi.$inject = ['$resource'];

  function PapelKpi($resource) {
    return $resource('http://localhost:8080/api/bi/papelKpis',
      null,
      {
        'findByCalendario': { method: 'GET',isArray:false}
      });
    
  }

})();