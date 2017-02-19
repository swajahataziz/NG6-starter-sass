import BreadcrumbModule from './breadcrumb'
import BreadcrumbController from './breadcrumb.controller';
import BreadcrumbComponent from './breadcrumb.component';
import BreadcrumbTemplate from './breadcrumb.html';

describe('Breadcrumb', () => {
  let $rootScope, makeController;

  beforeEach(window.module(BreadcrumbModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new BreadcrumbController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(BreadcrumbTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = BreadcrumbComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(BreadcrumbTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(BreadcrumbController);
      });
  });
});
