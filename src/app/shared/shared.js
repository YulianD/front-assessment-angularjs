import angular from 'angular';
import TopNavModule from './layout/top-nav/top-nav.module';
import RightNavModule from './layout/right-nav/right-nav.module';

const SharedModule = angular.module('app.shared',[
    TopNavModule.name,
    RightNavModule.name
]);

export default SharedModule;