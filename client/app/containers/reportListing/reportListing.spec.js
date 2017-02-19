import ReportListingModule from './reportListing'
import ReportListingController from './reportListing.controller';
import ReportListingComponent from './reportListing.component';
import ReportListingTemplate from './reportListing.html';

describe('ReportListing', () => {
  let $rootScope, makeController;

  beforeEach(window.module(ReportListingModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new ReportListingController();
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
      expect(ReportListingTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = ReportListingComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(ReportListingTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(ReportListingController);
      });
  });
});
