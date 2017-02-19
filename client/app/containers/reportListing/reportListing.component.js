import template from './reportListing.html';
import controller from './reportListing.controller';
import './reportListing.scss';

let reportListingComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default reportListingComponent;
