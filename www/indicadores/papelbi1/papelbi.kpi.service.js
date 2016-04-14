(function() {
  'use strict';

  angular
    .module('lx-bi')
    .factory('papelKpiService',papelKpiService);

  papelKpiService.$inject = ['$log'];

  function papelKpiService($log) {
    var indicadores = [
      {
        tipo: 'Semana',
        venta: 260,
        meta: 326,
        diferencia: 19,
        kpi: 0.045
      },
      {
        tipo: 'Mes',
        venta: 2729,
        meta: 3097,
        diferencia: -11,
        kpi: 0.476
      },
      {
        tipo: 'Año',
        venta: 9355,
        meta: 10597,
        diferencia: -11,
        kpi: 1.680
      }
    ];
    var service = {
      getIndicadores:getIndicadores 
    };

    return service;

    function getIndicadores() {
      $log.info('Localizando indicadores');
      return indicadores;
    }

  }
})();