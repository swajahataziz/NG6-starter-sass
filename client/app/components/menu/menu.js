import NavigationService from'../../services/navigation.service';
import MenuComponent from './menu.component';

let menu = angular.module('menu', [])
  .service('NavigationService', NavigationService)
  .component('menu', MenuComponent)
  .name;

export default menu;
