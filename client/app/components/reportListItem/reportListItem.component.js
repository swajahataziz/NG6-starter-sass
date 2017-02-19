import template from './reportListItem.html';
import controller from './reportListItem.controller';
import './reportListItem.scss';

let reportListItemComponent = {
  restrict: 'E',
  bindings: {
    report: '<'
  },
  template,
  controller,
  controllerAs: 'vm'
};

export default reportListItemComponent;
