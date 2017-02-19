import ReportsListModule from './reportsList'
import ReportsListController from './reportsList.controller';
import ReportsListComponent from './reportsList.component';
import ReportsListTemplate from './reportsList.html';

describe('ReportsList', () => {
  let $rootScope, makeController;

  beforeEach(window.module(ReportsListModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new ReportsListController();
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
      expect(ReportsListTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = ReportsListComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(ReportsListTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(ReportsListController);
      });
  });
});
