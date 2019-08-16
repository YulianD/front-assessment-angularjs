import angular from 'angular';
import ApiService from './api.service';

const ServicesModule = angular.module('app.services',[]);
ServicesModule.service('ApiService', ApiService);

export default ServicesModule;