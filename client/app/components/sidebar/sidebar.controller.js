class SidebarController {
  constructor($state, $transitions, $stateParams, NavigationService) {
    "ngInject";

    this.$state = $state;
    this.$transitions = $transitions;
    this.$stateParams = $stateParams;
    this.getSidebarItems = NavigationService.getSidebarItems.bind(NavigationService);
    this.name = 'sidebar';

    $transitions.onSuccess({}, this.onTransitionSuccess.bind(this), {priority: 10});
  }

  $onInit () {
    this.refreshSideMenu(this.$state.current, this.$stateParams);
  }

  onTransitionSuccess(transition) {
    this.refreshSideMenu(transition.to(), this.$stateParams);
  }

  updateSidebarVisibility () {
    this.sidebarVisible = this.items.length > 0;
  }

  refreshSideMenu (state, params) {
    this.items = this.getSidebarItems(state, params);
    this.updateSidebarVisibility();
  }
}

export default SidebarController;
