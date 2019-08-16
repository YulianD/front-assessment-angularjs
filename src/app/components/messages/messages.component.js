import template from './messages.template.html';
import controller from './messages.controller.js';

let messagesComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};
export default messagesComponent;