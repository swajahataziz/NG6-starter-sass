import angular from 'angular';
import reportsListComponent from './reportsList.component';
import ReportListItemComponent from '../reportListItem/reportListItem'

let reportsListModule = angular.module('reportsList', [
  ReportListItemComponent.name
])

.component('reportsList', reportsListComponent);

export default reportsListModule;
