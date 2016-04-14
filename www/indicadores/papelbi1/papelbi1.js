(function() {
  'use strict';

  angular
    .module('lx-bi')
    .controller('PapelKpiController',PapelKpiController);

  PapelKpiController.$inject = ['$log','$state','papelKpiService'];

  function PapelKpiController($log,$state,papelKpiService) {
    var vm = this;
    vm.title = $state.current.data.title;
    vm.calendario = {
      ejercicio: 2016,
      semana: 12
    };
    vm.indicadores = [];
    init();

    function init() {
      $log.info('Iniciando controlador Papel KPI');
      vm.indicadores = papelKpiService.getIndicadores();
    }
  }
})();