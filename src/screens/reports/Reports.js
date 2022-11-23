import React, { Component } from "react";
import DataTable from '../../components/DataTable/DataTable';

class Reports extends Component {
  render() {
    return (
      <div>
        <DataTable
          title={"Reports"}
          href={"/dashboard/reports"}
          btntitle={""}
          breadCrumbTitle={"Reports Page"}
          mainTitle={"Reports"}
          crumbLink={"/reports"}
          tHead={"Report Column1"}
          tData={"ReportData"}
        />{" "}
      </div>
    );
  }
}

export default Reports;
