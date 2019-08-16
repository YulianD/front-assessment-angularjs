import angular from 'angular';
import RightNavComponent from './right-nav.component';

const RightNavModule = angular.module('rightNav', [])
  .component('rightNavComponent', RightNavComponent);
export default RightNavModule;