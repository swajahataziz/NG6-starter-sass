import Home from '../home/home';
import mainComponent from './main.component';
import states from './main.states';

let dependencies = [
  Home
];

let mainModule = angular.module('main',
  dependencies
)
  .component('main', mainComponent)
  .config(states)
  .name;

export default mainModule;
