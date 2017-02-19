class TemplateManagerController {
  constructor(CollectionService) {
    "ngInject"
    this.CollectionService = CollectionService;
    this.name = 'templateManager';
    this.collections = [];
  }

  $onInit() {
    this.collections = this.CollectionService.getCollections();
  }
}

export default TemplateManagerController;
