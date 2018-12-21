import angular from 'angular';
import ngRoute from 'angular-route';

import './templates';
import './components';


angular.module('ng1App', [
    'ngRoute',
    'templates',
    'ng1App.components'
  ])
  .config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.html5Mode(true);

      $routeProvider.
      when('/', {
        template: '<ng1-component></ng1-component>'
      })
    }
  ]);