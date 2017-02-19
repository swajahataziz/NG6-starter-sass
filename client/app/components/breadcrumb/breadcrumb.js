import breadcrumbComponent from './breadcrumb.component';

let breadcrumbModule = angular.module('breadcrumb', [])
  .component('breadcrumb', breadcrumbComponent)
  .name;

export default breadcrumbModule;
