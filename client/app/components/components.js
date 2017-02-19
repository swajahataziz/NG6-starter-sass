import Main from '../pages/main/main';
import Breadcrumb from './breadcrumb/breadcrumb';
import Menu from './menu/menu';
import Sidebar from './sidebar/sidebar'

const componentList = [
        Main,
        Breadcrumb,
        Menu,
        Sidebar
      ],
      Components = angular.
        module('app.components', componentList)
      .name;

export default Components;
