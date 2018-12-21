import angular from 'angular';

let componentsModule = angular.module('ng1App.components', []);

import Ng1Component from './ng1-component/ng1-component';
componentsModule.component('ng1Component', Ng1Component);