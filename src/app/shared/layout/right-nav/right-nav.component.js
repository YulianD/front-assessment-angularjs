import template from './right-nav.html';
import controller from './right-nav.controller';
import './right-nav.css';

let RightNavComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'RightNavController'
};
export default RightNavComponent;