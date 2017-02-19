import angular from 'angular';
import uiRouter from 'angular-ui-router';
import AppComponent from './app.component';

import Components from './components/components'
import Common from './common/common';
import AppService from './app.service';
import ReportsService from './services/ReportsService';

import 'normalize.css';
import 'bootstrap/dist/css/bootstrap.css';

const dependencies = [
  uiRouter,
  Common,
  Components
],
root = angular.module('app', dependencies)
  .component('app', AppComponent)
  .service('AppService', AppService)
  .factory('ReportsService', ReportsService)
  .config(($locationProvider, $urlRouterProvider) => {
    'ngInject';

    // @see: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions
    // #how-to-configure-your-server-to-work-with-html5mode


    /*
    $stateProvider
      .state('app', {
        url: '/app',
        abstract: true,
        component: 'app',
        data: {
          requiresAuth: true,
          breadcrumb: {
            useState: 'app.home' //abstract state to be used as a parent container
          }
        }
      })
      //Dashboard page to contain summary reports

      .state('app.home', {
        url: '/home',
        component: 'home'
      });
      */
    $urlRouterProvider.otherwise('/home');
   });

export default root;
