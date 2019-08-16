import template from './home.template.html';
import controller from './home.controller.js';
import './home.style.css';

let homeComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

homeComponent.$inject=['$http','ApiService'];
export default homeComponent;
