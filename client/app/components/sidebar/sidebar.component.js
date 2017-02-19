import template from './sidebar.html';
import controller from './sidebar.controller';
import './sidebar.scss';

let sidebarComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller
};

export default sidebarComponent;
