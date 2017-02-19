/**
 * Created by wajahat on 23/01/2017.
 */
function ReportsService() {
  "ngInject";

  //private variable to store report entries
  const reports = [
    {
      name: "Sample Report 1",
      reportType: "Tabular Report",
      reportDescription: "First Sample Report"
    },
    {
      name: "Sample Report 2",
      reportType: "Chart Report",
      reportDescription: "Second Sample Report"
    }
  ];

  return {

    getReports() {
      return reports;
    },

    createReport(report) {

      const {name, reportType, reportDescription} = report;

      const newReport = {
        name,
        reportType,
        reportDescription
      };
      reports.push(newReport);
    }
  }
}

export default ReportsService;
