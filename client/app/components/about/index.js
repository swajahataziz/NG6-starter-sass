import aboutComponent from './about.component';

const aboutModule = angular.module('about', [])
  .component('about', aboutComponent)
  .name;

export default aboutModule;
