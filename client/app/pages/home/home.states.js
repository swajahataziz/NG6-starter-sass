/**
 * Created by wajahat on 06/02/2017.
 */
const home = {
  url: '/home',
  //template: '<home></home>',
  component: 'home',
  data : {
    requiredAuth: true,
    breadcrumb: {
      label: 'Home',
      skipParent: true
    }
  }
};

const states = ['$stateProvider', ($stateProvider) => {
  $stateProvider
    .state('main.home', home);
}];

export default states;
