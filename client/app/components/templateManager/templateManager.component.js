import template from './templateManager.html';
import controller from './templateManager.controller';
import './templateManager.scss';

let templateManagerComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller
  };

export default templateManagerComponent;
