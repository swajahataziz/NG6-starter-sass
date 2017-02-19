import angular from 'angular';
import uiRouter from 'angular-ui-router';
import templateManagerComponent from './templateManager.component';
import CollectionService from './services/CollectionService';

let templateManagerModule = angular.module('templateManager', [
  uiRouter,
  CollectionService
])

.component('templateManager', templateManagerComponent)

.name;

export default templateManagerModule;
