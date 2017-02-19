import reportListingComponent from './reportListing.component';
import ReportsList from '../../components/reportsList/reportsList';

let reportListingModule = angular.module('reportListing', [
  ReportsList.name
])

.component('reportListing', reportListingComponent);

export default reportListingModule;
