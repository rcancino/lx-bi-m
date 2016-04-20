(function() {
  'use strict';

  angular
    .module('lx-bi')
    .controller('PapelKpiInventarioController',PapelKpiInventarioController);

 PapelKpiInventarioController.$inject = ['$scope','$log','$state','$ionicPopover','PapelKpiInventario','Calendario'];

 function PapelKpiInventarioController($scope,$log,$state,$ionicPopover,PapelKpiInventario,Calendario) {
   var vm = this;
   vm.title = $state.current.data.title;
   vm.calendario;
   vm.indicador;
   vm.popover;
   vm.mostrarCalendarios = mostrarCalendarios;
   
   init();

   function init() {
     $log.info('Iniciando controlador Papel Inventario KPI');
     
     $scope.calendarios = Calendario.query({max:20});

     $ionicPopover.fromTemplateUrl('indicadores/papelkpi/calendario.list.html', {
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
       $log.info('Fijando calendario: '+calendario.id);
       vm.calendario = calendario;
       vm.indicador = PapelKpiInventario.findByCalendario({calendarioId:calendario.id});
       $log.info('KPI: '+vm.indicador);
       vm.popover.hide();
   }

 }

})();