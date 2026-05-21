import React from "react";
import ReportHeader from "../../reports/ReportHeader";
import ReportFilters from "../../reports/ReportFilters";
import TeachersTable from "../../reports/TeachersTable";

const TeachersReport = () => {
  return (
    <div style={{ padding: "20px" }}>
      <ReportHeader />
      <ReportFilters />
      <TeachersTable />
    </div>
  );
};

export default TeachersReport;