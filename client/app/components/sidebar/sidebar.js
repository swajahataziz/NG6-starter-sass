import NavigationService from '../../services/navigation.service';
import SidebarComponent from './sidebar.component';

let sidebarModule = angular.module('sidebar', [])
  .service('NavigationService', NavigationService)
  .component('sidebar', SidebarComponent)
  .name;

export default sidebarModule;
