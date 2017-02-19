class ReportListingController {
  constructor(ReportsService) {
    "ngInject";

    this.ReportsService = ReportsService;

    this.reportsList = [];
  }
    $onInit() {
      this.reportsList = this.ReportsService.getReports();
    };
  }


export default ReportListingController;
