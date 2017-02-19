/**
 * Created by wajahat on 09/02/2017.
 */
class AppController {
  constructor ($state, AppService) {

    "ngInject";

    this.$state = $state;
    this.AppService = AppService;
  }
}

export default AppController;
