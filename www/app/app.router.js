(function() {
  'use strict';

  angular
    .module('lx-bi')
    .config(configBlock);

  configBlock.$inject = ['$stateProvider','$urlRouterProvider'];

  function configBlock($stateProvider, $urlRouterProvider) {
    $stateProvider
    .state('tabs', {
      url: '/tabs',
      abstract: true,
      templateUrl: 'app/tabs.html'
    })
    .state('tabs.inicio', {
      url: '/inicio',
      views: {
        'home-tab': {
          url: '/inicio',
          templateUrl: 'app/home.html'
        }
      }
    })
    .state('tabs.indicadores', {
      url: '/indicadores',
      views: {
        'indicadores-tab': {
          url: '/indicadores',
          templateUrl: 'indicadores/indicadores.html'
        }
      }
    })
    .state('papelkpi', {
      url: '/papelkpi/resumen',
      parent: 'tabs',
      views: {
        'indicadores-tab': {
          url: '/papelkpi',
          templateUrl: 'indicadores/papelkpi/papelKpis.html'
        }
      }
    })
    .state('papelkpiResumen', {
      url: '/papelkpi/resumen',
      parent: 'tabs',
      data: {
          title: 'Resumen'
      },
      views: {
        'indicadores-tab': {
          templateUrl: 'indicadores/papelkpi/papelKpiResumen.html',
          controller: 'PapelKpiController',
          controllerAs: 'vm'
        }
      }
    })

    .state('papelkpiResumenVentas', {
      url: '/papelkpi/resumen/ventas',
      parent: 'tabs',
      data: {
          title: 'Ventas (TON)'
      },
      views: {
        'indicadores-tab': {
          templateUrl: 'indicadores/papelkpi/papelKpiResumenVentas.html',
          controller: 'PapelKpiController',
          controllerAs: 'vm'
        }
      }
    })

    .state('papelkpiResumenMargen', {
      url: '/papelkpi/resumen/margen',
      parent: 'tabs',
      data: {
          title: 'Margen'
      },
      views: {
        'indicadores-tab': {
          templateUrl: 'indicadores/papelkpi/papelKpiResumenMargen.html',
          controller: 'PapelKpiController',
          controllerAs: 'vm'
        }
      }
    })

    .state('papelkpiResumenPrecio', {
      url: '/papelkpi/resumen/precio',
      parent: 'tabs',
      data: {
          title: 'Precio por Kg'
      },
      views: {
        'indicadores-tab': {
          templateUrl: 'indicadores/papelkpi/papelKpiResumenPrecio.html',
          controller: 'PapelKpiController',
          controllerAs: 'vm'
        }
      }
    })

    .state('papelkpiResumenTickets', {
      url: '/papelkpi/resumen/tickets',
      parent: 'tabs',
      data: {
          title: 'Tickets de venta'
      },
      views: {
        'indicadores-tab': {
          templateUrl: 'indicadores/papelkpi/papelKpiResumenTickets.html',
          controller: 'PapelKpiController',
          controllerAs: 'vm'
        }
      }
    })

    .state('papelkpiResumenInventarios', {
      url: '/papelkpi/resumen/inventarios',
      parent: 'tabs',
      data: {
          title: 'Inventarios'
      },
      views: {
        'indicadores-tab': {
          templateUrl: 'indicadores/papelkpi/papelKpiResumenInventarios.html',
          controller: 'PapelKpiController',
          controllerAs: 'vm'
        }
      }
    })

    .state('papelkpiResumenAlcances', {
      url: '/papelkpi/resumen/alcances',
      parent: 'tabs',
      data: {
          title: 'Alcances'
      },
      views: {
        'indicadores-tab': {
          templateUrl: 'indicadores/papelkpi/papelKpiResumenAlcances.html',
          controller: 'PapelKpiController',
          controllerAs: 'vm'
        }
      }
    })
    
    // Tableros
    .state('tableros', {
      url: '/tableros',
      parent: 'tabs',
      views: {
        'tableros-tab': {
          url: '/tableros',
          templateUrl: 'tableros/tableros.html'
        }
      }
    });

    $urlRouterProvider.otherwise('/tabs/indicadores');
  }

})();