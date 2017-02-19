/**
 * Created by wajahat on 09/02/2017.
 */
class NavigationService {
  constructor ($state, AppService) {
    let allStates = $state.get();

    this.navigableStates = allStates.filter(this.isNavigable);
    this.filters = {
      menu: this.menuFilter,
      sidebar: this.sidebarFilter,
      showFor: this.showForFilter
    };
    this.items = {
      menu: this.navigableStates
                .filter(this.filters.menu)
                .map(this.createMenuItem)
    }
  }

  isNavigable (state) {
    if (state.hasOwnProperty('abstract') && state.abstract) {
      return false;
    }
    if (!state.hasOwnProperty('data')) {
      return false;
    }
    if (!state.data.hasOwnProperty('navigation')) {
      return false;
    }
    return true;
  }

  roleFilter (state) {
    return this.roles.some(function (v) {
      return state.data.requiredRole.indexOf(v) >= 0;
    });
  }

  menuFilter (state) {
    return state.data.navigation.menu;
  }

  sidebarFilter (state) {
    return state.data.navigation.sidebar;
  }

  showForFilter (state) {
    let currentState = this.currentState.name,
        hideForChildStates = state.data.navigation.sidebar.hideForChildStates,
        showForPattern = new RegExp(state.data.navigation.sidebar.showFor),
        childOfShowForPattern = new RegExp(state.data.navigation.sidebar.showFor + '.+');

    let shouldBeShown = currentState.match(showForPattern) !== null,
        isNotChildOfCurrentState = currentState.match(childOfShowForPattern) === null;

    if (hideForChildStates) {
      return shouldBeShown && isNotChildOfCurrentState;
    }

    return shouldBeShown;
  }

  createMenuItem (state) {
    let navigationData = state.data.navigation.menu;

    return Object.assign({}, navigationData, { state: state.name });
  }

  createSidebarItem (state, stateParams) {
    let params = this.collectExpectedParams(state.params, stateParams),
        sref = state.name;

    if(params) {
      sref += `(${angular.toJson(params)})`;
    }
    return Object.assign({}, state.data.navigation.sidebar, { state: sref});
  }

  collectExpectedParams (expectedParams, stateParams) {
    let result;

    for (let property in expectedParams) {
      if (expectedParams.hasOwnProperty(property) && stateParams(property)) {
        result = result || {};
        result[property] = stateParams[property];
      }
    }
    return result;
  }

  getMenuItems () {
    return this.items.menu;
  }

  getSidebarItems (currentState, stateParams) {
    let items = this.navigableStates
                .filter(this.filters.sidebar)
                .filter(this.filters.showFor.bind({ currentState: currentState }))
                .map(state => {
                      return this.createSidebarItem(state, stateParams);
                });
    return angular.copy(items);
  }
}

export default NavigationService;
