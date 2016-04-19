(function() {
  'use strict';

  angular
    .module('lx-bi')
    .factory('PapelKpi',PapelKpi);

  PapelKpi.$inject = ['$resource'];

  function PapelKpi($resource) {
    var res = $resource('http://localhost:8080/api/bi/papelKpis',
      null,
      {
        'findByCalendario': { method: 'GET',isArray:false}
      });

    res.prototype.getDiferenciaVentas = function(argument){
      switch (argument) {
        case 'semanal':
          return (this.ventaSemanal - this.ventaSemanalMeta);
          break;
        case 'mensual':
          return (this.ventaMensual - this.ventaMensualMeta);
          break;
        case 'anual':
          return (this.ventaAnual - this.ventaAnualMeta);
          break;
        default:
          return 0.0
          break;
      }
    };

    res.prototype.getDesviacionVentas = function(argument){
      switch (argument) {
        case 'semanal':
          return ( (this.getDiferenciaVentas(argument)/this.ventaSemanal) * 100);
          break;
        case 'mensual':
          return ( (this.getDiferenciaVentas(argument)/this.ventaMensual) * 100);
          break;
        case 'anual':
          return ( (this.getDiferenciaVentas(argument)/this.ventaAnual) * 100);
          break;
        default:
          return 0.0
          break;
      }
    };

    res.prototype.getKpiVentas = function(argument){
      switch (argument) {
        case 'semanal':
          return ( (1-this.getDesviacionVentas(argument)/100)*this.kpiSemanal );
          break;
        case 'mensual':
          return ( this.kpiMensual-(this.getDesviacionVentas(argument)*this.kpiMensual)/100 );
          break;
        case 'anual':
          return ( this.kpiAnual-(this.getDesviacionVentas(argument)*this.kpiAnual)/100 );
          break;
        default:
          return 0.0
          break;
      }
    };

    res.prototype.getKpi


    return res;
    
  }

})();