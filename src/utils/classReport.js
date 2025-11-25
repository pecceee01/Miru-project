"use client"

import React from "react";

const ReportsPage = () => {
  // Sample data for class performance
  const classData = [
    { grade: "10A", subject: "Mathematics", attendance: "92%", gradeAvg: "B+", students: 30 },
    { grade: "10B", subject: "Mathematics", attendance: "88%", gradeAvg: "B", students: 28 },
    { grade: "9A", subject: "Mathematics", attendance: "94%", gradeAvg: "A-", students: 32 },
  ];

  // Handle report button click
  const handleReportClick = (type) => {
    alert(`Generating ${type}...`);
    console.log(`Report generated: ${type}`);
  };

  // Handle export click for each class
  const handleExport = (grade) => {
    alert(`Exporting report for Grade ${grade}`);
    console.log(`Exported report for Grade ${grade}`);
  };

  return (
    <div className="bg-gray-50 min-h-screen p-10 text-gray-800">
      {/* Navbar */}
      <header className="mb-10">
        <h1 className="text-2xl font-semibold text-indigo-600">Miru</h1>
      </header>

      {/* Class Reports Section */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">Class Reports</h2>
        <p className="text-gray-500 mb-6">
          View and export your class performance data
        </p>

        <div className="flex flex-col gap-5 w-[420px]">
          <ReportCard title="Average Attendance" value="91.3%" iconColor="from-purple-500 to-pink-500" />
          <ReportCard title="Average Grade" value="B+" iconColor="from-purple-500 to-pink-500" />
          <ReportCard title="Total Students" value="90" iconColor="from-purple-500 to-pink-500" />
        </div>
      </section>

      {/* Class Performance Section */}
      <section className="mb-10 w-[600px]">
        <h2 className="text-xl font-semibold mb-5">Class Performance</h2>
        <div className="flex flex-col gap-5">
          {classData.map((cls) => (
            <ClassCard
              key={cls.grade}
              {...cls}
              onExport={() => handleExport(cls.grade)}
            />
          ))}
        </div>
      </section>

      {/* Generate Custom Report Section */}
      <section className="w-[420px]">
        <h2 className="text-xl font-semibold mb-5">Generate Custom Report</h2>
        <div className="flex flex-col gap-4">
          <ReportButton label="Attendance Report" onClick={() => handleReportClick("Attendance Report")} />
          <ReportButton label="Grade Report" onClick={() => handleReportClick("Grade Report")} />
          <ReportButton label="Performance Report" onClick={() => handleReportClick("Performance Report")} />
        </div>
      </section>
    </div>
  );
};

// Small components for reuse
const ReportCard = ({ title, value, iconColor }) => (
  <div className="flex items-center gap-4 bg-white rounded-xl p-5 shadow-sm border border-gray-200">
    <div
      className={`w-10 h-10 rounded-lg bg-gradient-to-br ${iconColor} flex items-center justify-center`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 17l6-6 4 4 6-6" />
      </svg>
    </div>
    <div>
      <p className="text-2xl font-semibold">{value}</p>
      <p className="text-gray-500">{title}</p>
    </div>
  </div>
);

const ClassCard = ({ grade, subject, attendance, gradeAvg, students, onExport }) => (
  <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-200 flex justify-between items-center">
    <div>
      <p className="font-semibold text-lg">Grade {grade}</p>
      <p className="text-gray-500">{subject}</p>
      <p className="text-gray-500 text-sm">• {students} students</p>
    </div>
    <div className="text-right">
      <p>
        <span className="font-medium text-gray-600">Attendance:</span> {attendance}
      </p>
      <p>
        <span className="font-medium text-gray-600">Avg Grade:</span> {gradeAvg}
      </p>
      <button
        onClick={onExport}
        className="mt-2 px-3 py-1 border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50"
      >
        Export
      </button>
    </div>
  </div>
);

const ReportButton = ({ label, onClick }) => (
  <button
    onClick={onClick}
    className="flex items-center justify-center gap-2 bg-white border border-gray-200 rounded-xl p-4 font-medium hover:bg-gray-50 shadow-sm"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-5 h-5 text-gray-600"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
    </svg>
    {label}
  </button>
);

export default ReportsPage;
