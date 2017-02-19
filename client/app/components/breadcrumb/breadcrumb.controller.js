/**
 * Created by wajahat on 05/02/2017.
 */
class BreadcrumbController {
  constructor($state, $stateParams, $transitions, $interpolate) {
    "ngInject";

    this.name = 'breadcrumb';
    this.$state =$state;
    this.$stateParams = $stateParams;
    this.$transitions = $transitions;
    this.$interpolate = $interpolate;
    this.items=[];
  }

  $onInit() {
    this.populateBreadcrumb(this.$state.current);
    this.$transitions.onSuccess({}, this.transitionHandler.bind(this))
  }

  transitionHandler(transition) {
    let currentState = transition.to();
    this.populateBreadcrumb(currentState);
  }

  getBreadcrumbItem(state) {
    let vm = this,
      getState = this.$state.get;

    function getIt(state) {
      let breadcrumbItem = {
        label: state.name,
        state: state.name
      };

      if(state.hasOwnProperty('data') && state.data.hasOwnProperty('breadcrumb')) {
        if(state.data.breadcrumb.hasOwnProperty('targetState')) {
          breadcrumbItem.state = state.data.breadcrumb.targetState;
        }

        if(state.data.breadcrumb.hasOwnProperty('useState')) {
          return getIt(getState(state.data.breadcrumb.useState));
        }

        else if(state.data.breadcrumb.label) {
          breadcrumbItem.label = vm.$interpolate(state.data.breadcrumb.label)(vm.$stateParams);
        }
      }
      return breadcrumbItem;
    }
    return getIt(state);
  }

  /*
   Takes a state name and an object to populate method result with.
   Populates breadcrumb items for a given state
   */
  getBreadcrumbItems(stateName, result) {
    let stateNames = [];
    stateName.split('.').reduce(function(parentStateName, childStateName) {
      childStateName = !parentStateName? childStateName: parentStateName.concat('.',childStateName);
      stateNames.push(childStateName);
      return childStateName;
    }, false);

    stateNames.reverse();

    let skipParent = false,
      parent = false;

    for(let i=0; i<stateNames.length; i++) {
      if(skipParent) {continue};

      let state = this.$state.get(stateNames[i]),
        breadcrumbItem = this.getBreadcrumbItem(state);

      result.push(breadcrumbItem);
      skipParent = this.skipParent(state);
      parent = this.getExlicitParent(state);
      if(parent) {
        return this.getBreadcrumbItems(parent,result);
        break;
      }
    }
  }

  populateBreadcrumb(currentState) {
    this.items.length=0;
    this.getBreadcrumbItems(currentState.name, this.items);
    this.items.reverse();
  }

  skipParent(state) {
    if(state.hasOwnProperty('data') && state.data.hasOwnProperty('breadcrumb') && state.data.breadcrumb.hasOwnProperty('skipParent')) {
      return state.data.breadcrumb.skipParent;
    }
    return false;
  }

  getExlicitParent(state) {
    if(state.hasOwnProperty('data') && state.data.hasOwnProperty('breadcrumb') && state.data.breadcrumb.hasOwnProperty('parent')) {
      return state.data.breadcrumb.parent;
    }
    return false;
  }
}

export default BreadcrumbController;
