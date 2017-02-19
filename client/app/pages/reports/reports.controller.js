class ReportsController {
  constructor($state, $stateParams) {
    "ngInject";

    this.$state = $state;
    this.$stateParams = $stateParams;
    this.reports = {
      "code": "",
      "name": "All available Reports"
    };
    this.name = 'reports';
  }

  $onInit () {
    this.availableReports = this.getAvailableReports(this.reportsList);
    this.selectedReport = this.availableReports[0];
  }

  getAvailableReports(reportsList) {
    let vm = this,
      availableReports = reportsList.map(function(report) {
        return {
          "code": report.code,
          "name": report.name
        };
      });

    availableReports.shift(vm.allReports);
    return availableReports;
  }
}

export default ReportsController;
