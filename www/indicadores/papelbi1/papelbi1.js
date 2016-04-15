(function() {
  'use strict';

  angular
    .module('lx-bi')
    .controller('PapelKpiController',PapelKpiController);

  PapelKpiController.$inject = ['$scope','$log','$state','papelKpiService','$ionicPopover','Calendario'];

  function PapelKpiController($scope,$log,$state,papelKpiService,$ionicPopover,Calendario) {
    var vm = this;
    vm.title = $state.current.data.title;
    vm.calendario = {
      year: 2016,
      sem: 12
    };
    vm.indicadores = [];
    vm.popover;
    vm.mostrarCalendarios = mostrarCalendarios;
    
    init();

    function init() {
      $log.info('Iniciando controlador Papel KPI');
      vm.indicadores = papelKpiService.getIndicadores();
      
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

    $scope.$on('$destroy',function() {
      vm.popover.remove();
    });

    $scope.setCalendario = function(calendario) {   
        $log.info('Fijando calendario: '+calendario);
        vm.calendario = calendario;
        vm.popover.hide();
    }

  }
})();