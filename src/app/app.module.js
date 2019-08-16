import 'bootstrap-css-only';
import 'font-awesome/css/font-awesome.css'
import '../assets/css/custom-toggle.css'
import '../assets/images/logo.png'

import angular from 'angular';
import '@uirouter/angularjs';
import 'angular-resource';

import appComponent from './app.component';
import ComponentsModule from './components/components';
import SharedModule from './shared/shared';
import ServicesModule from './services/services';

angular.module('app', [
    'ui.router',
    'ngResource',
    ComponentsModule.name,
    SharedModule.name,
    ServicesModule.name
]).component('appComponent', appComponent).config(config);

config.$inject = ['$stateProvider', '$locationProvider', '$urlRouterProvider','$httpProvider'];

function config($stateProvider, $locationProvider, $urlRouterProvider) {



    $locationProvider.html5Mode(true);

    $urlRouterProvider.otherwise('/home');

    $stateProvider
        .state({
            name: 'home',
            url: '/home',
            component: 'home'
        })
        .state(
            {
                name: 'messages',
                url: '/messages',
                component:'messages'
            }
        )
        .state(
            {
                name: 'whislist',
                url: '/whislist',
                template:'<h1>Hello from <b>WHISLIST</b></h1>'
            }
        )
        .state(
            {
                name: 'settings',
                url: '/settings',
                template:'<h1>Hello from <b>SETTINGS</b></h1>'
            }
        )
        .state(
            {
                name: 'account',
                url: '/account',
                template:'<h1>Hello from <b>ACCOUNT</b></h1>'
            }
        )


}