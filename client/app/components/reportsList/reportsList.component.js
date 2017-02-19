import template from './reportsList.html';
import controller from './reportsList.controller';
import './reportsList.scss';

let reportsListComponent = {
  restrict: 'E',
  bindings: {
    reports: '<'
  },
  template,
  controller,
  controllerAs: 'vm'
};

export default reportsListComponent;
