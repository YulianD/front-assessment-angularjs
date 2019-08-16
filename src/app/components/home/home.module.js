import angular from 'angular';
import homeComponent from './home.component';

const homeModule = angular.module('home', [])
  .component('home', homeComponent).service('ApiService');


export default homeModule;