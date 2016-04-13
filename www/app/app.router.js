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
    .state('papel_bi1', {
      url: '/papel_bi1',
      parent: 'tabs',
      views: {
        'indicadores-tab': {
          url: '/papel_bi1',
          templateUrl: 'indicadores/papelbi1/papelbi1.html'
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

    $urlRouterProvider.otherwise('/tabs/tableros');
  }

})();