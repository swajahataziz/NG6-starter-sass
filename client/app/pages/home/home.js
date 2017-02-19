import HomeComponent from './home.component';
import states from './home.states';
let home = angular.module('home', [
])
  .component('home', HomeComponent)
  .config(states)
  .name;

export default home;
