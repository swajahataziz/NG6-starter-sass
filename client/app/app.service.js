/**
 * Created by wajahat on 09/02/2017.
 */
class AppService {
  constructor () {
    this.loadState();
  }

  loadState() {
    try {
      let sessionStorageItem =sessionStorage.getItem('appState');

      return angular.extend(this, angular.fromJson(sessionStorageItem));
    } catch(Error) {
      //empty
    }

    return this;
  }

  saveState () {
    let stateToSave = angular.extend({}, this);

    sessionStorage.setItem('appState', angular.toJson(stateToSave));
  }
}

export default AppService;
