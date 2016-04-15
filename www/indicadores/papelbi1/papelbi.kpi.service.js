(function() {
  'use strict';

  angular
    .module('lx-bi')
    .factory('papelKpiService',papelKpiService);

  papelKpiService.$inject = ['$log'];

  function papelKpiService($log) {
    var indicadores = [
      {
        ventaSemanal: 260,
        ventaMensual: 2729,
        ventaAnual: 9355,
        metaSemanal: 326,
        metaMensual: 3097,
        metaAnua: 10597,
        diferenciaSemanal: 19,
        diferenciaMensual: -11,
        diferenciaAnual: -11,
        kpiSemanal: 0.045,
        kpiMensual: 0.476,
        kpiAnual: 1.680
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