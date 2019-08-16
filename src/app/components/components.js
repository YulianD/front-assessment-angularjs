import angular from 'angular';
import HomeModule from './home/home.module';
import MessagesModule from './messages/messages.module';


const ComponentsModule = angular.module('app.components',[
    HomeModule.name,
    MessagesModule.name
]);

export default ComponentsModule;