(function() {
  'use strict';

  angular
    .module('lx-bi')
    .controller('PapelKpiController',PapelKpiController);

  PapelKpiController.$inject = ['$scope','$log','$state','$ionicPopover','PapelKpi','Calendario'];

  function PapelKpiController($scope,$log,$state,$ionicPopover,PapelKpi,Calendario) {
    var vm = this;
    vm.title = $state.current.data.title;
    vm.calendario;
    vm.indicador;
    vm.popover;
    vm.mostrarCalendarios = mostrarCalendarios;
    
    init();

    function init() {
      $log.info('Iniciando controlador Papel KPI');
      
      $scope.calendarios = Calendario.query({max:20});

      $ionicPopover.fromTemplateUrl('indicadores/papelbi1/calendario.list.html', {
         scope:$scope,

      }).then(function(popover) {
        vm.popover = popover;
      });
    }

    function mostrarCalendarios($event){
      $log.info('Abriendo ventana de calendarios');
      vm.popover.show($event);
    }

    function setKpi(calendario){
      //vm.kpi = PapelKpi
    }

    $scope.$on('$destroy',function() {
      vm.popover.remove();
    });

    $scope.setCalendario = function(calendario) {   
        $log.info('Fijando calendario: '+calendario.id);
        vm.calendario = calendario;
        vm.indicador = PapelKpi.findByCalendario({calendarioId:calendario.id});
        $log.info('KPI: '+vm.indicador);
        vm.popover.hide();
    }

  }
})();