import angular from 'angular';
import TopNavComponent from './top-nav.component';

const TopNavModule = angular.module('topNav', [])
  .component('topNavComponent', TopNavComponent);
export default TopNavModule;