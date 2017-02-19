/**
 * Created by wajahat on 06/02/2017.
 */
const app = {
  abstract: true,
  component: 'app',
  data: {
    requiresAuth: true,
    breadcrumb: {
      useState: 'app.home' //abstract state to be used as a parent container
    }
  }
};

const states = ['$stateProvider', ($stateProvider) => {
  $stateProvider
    .state('app', app);
}];

export default states;
