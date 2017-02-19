class MenuController {
  constructor($state, AppService, NavigationService) {
    "ngInject";

    this.$state = $state;
    this.getMenuItems = NavigationService.getMenuItems.bind(NavigationService);
    this.collapsed = {};
    this.name = 'menu';
  }

  $onInit() {
    this.items = this.getMenuItems();
  }

  toggle (key) {
    if(this.collapsed.hasOwnProperty(key)) {
      this.collapsed[key] = !this.collapsed[key];
    }
  }
}

export default MenuController;
