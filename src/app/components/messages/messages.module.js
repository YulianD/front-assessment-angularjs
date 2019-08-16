import angular from 'angular';
import messagesComponent from './messages.component';


const messagesModule = angular.module('messages', [])
  .component('messages', messagesComponent).service('ApiService');
export default messagesModule;