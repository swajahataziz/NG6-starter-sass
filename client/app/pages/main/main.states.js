/**
 * Created by wajahat on 06/02/2017.
 */
const main = {
  abstract: true,
  component: 'main',
  data: {
    requiresAuth: true,
    breadcrumb: {
      useState: 'main.home' //abstract state to be used as a parent container
    }
  }
};

const states = ['$stateProvider', ($stateProvider) => {
  $stateProvider
    .state('main', main);
}];

export default states;
