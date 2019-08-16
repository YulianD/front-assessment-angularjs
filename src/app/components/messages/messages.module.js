import angular from 'angular';
import messagesComponent from './messages.component';

const messagesModule = angular.module('messages', [])
  .component('messages', messagesComponent);
export default messagesModule;