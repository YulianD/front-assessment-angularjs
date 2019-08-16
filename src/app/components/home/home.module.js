import angular from 'angular';
import homeComponent from './home.component';
import ApiService from '../../services/api.service'

const homeModule = angular.module('home', [])
  .component('home', homeComponent).service('ApiService', ApiService);


export default homeModule;