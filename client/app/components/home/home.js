import angular from 'angular';
import homeComponent from './home.component';
import ReportListingComponent from '../../containers/reportListing/reportListing';

let homeModule = angular.module('home', [
  ReportListingComponent.name
])

.component('home', homeComponent)
  .name;

export default homeModule;
