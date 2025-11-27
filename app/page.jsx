"use client";

export default function DashboardPage() {
  return (
    <div className="min-h-screen flex bg-gray-50">

      {/* ================= Sidebar ================ */}
      <aside className="w-64 bg-white border-r p-6 flex flex-col">
        <h1 className="text-2xl font-bold text-indigo-600 mb-8">Miru</h1>

        <nav className="space-y-4">
          <a className="block text-gray-700 font-medium hover:text-indigo-600 cursor-pointer">Dashboard</a>
          <a className="block text-gray-700 hover:text-indigo-600 cursor-pointer">My Attendance</a>
          <a className="block text-gray-700 hover:text-indigo-600 cursor-pointer">Grades</a>
          <a className="block text-gray-700 hover:text-indigo-600 cursor-pointer">Announcements</a>
        </nav>

        <div className="mt-auto">
          <a className="block text-gray-500 mt-10 hover:text-red-500 cursor-pointer">Logout</a>
        </div>
      </aside>

      {/* ================= Main Content ================ */}
      <main className="flex-1 p-8 overflow-y-auto">

        {/* Top Bar */}
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-xl font-semibold">Welcome back,</h2>
          <div className="flex items-center gap-4">
            <button className="px-4 py-2 rounded-md border hover:bg-gray-100">Settings</button>
            <button className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600">Logout</button>
          </div>
        </div>

        {/* Reports & Analytics */}
        <section>
          <h3 className="text-lg font-semibold mb-3">Reports & Analytics</h3>
          <p className="text-gray-500 mb-6">View and download detailed reports</p>

          <div className="grid grid-cols-3 gap-6 mb-10">
            <div className="p-6 bg-white rounded-xl shadow-sm border">
              <div className="w-10 h-10 bg-indigo-500 rounded-lg mb-3"></div>
              <p className="text-2xl font-semibold">94.2%</p>
              <p className="text-gray-500 text-sm">Overall Attendance</p>
            </div>

            <div className="p-6 bg-white rounded-xl shadow-sm border">
              <div className="w-10 h-10 bg-purple-500 rounded-lg mb-3"></div>
              <p className="text-2xl font-semibold">1,234</p>
              <p className="text-gray-500 text-sm">Active Students</p>
            </div>

            <div className="p-6 bg-white rounded-xl shadow-sm border">
              <div className="w-10 h-10 bg-blue-600 rounded-lg mb-3"></div>
              <p className="text-2xl font-semibold">156</p>
              <p className="text-gray-500 text-sm">Reports Generated</p>
            </div>
          </div>
        </section>

        {/* Generate Report */}
        <h3 className="text-lg font-semibold mb-4">Generate New Report</h3>
        <div className="grid grid-cols-3 gap-6 mb-12">
          <button className="p-6 bg-white rounded-xl shadow-sm border hover:bg-gray-50">Attendance Report</button>
          <button className="p-6 bg-white rounded-xl shadow-sm border hover:bg-gray-50">Performance Report</button>
          <button className="p-6 bg-white rounded-xl shadow-sm border hover:bg-gray-50">Custom Report</button>
        </div>

        {/* Recent Reports */}
        <h3 className="text-lg font-semibold mb-4">Recent Reports</h3>

        <div className="space-y-4">
          {[ 
            { title:"Monthly Attendance Report", date:"March 2025", size:"2.4 MB" },
            { title:"Student Performance Analysis", date:"Q1 2025", size:"1.8 MB" },
            { title:"Teacher Efficiency Report", date:"February 2025", size:"1.2 MB" },
            { title:"Class-wise Comparison", date:"March 2025", size:"3.1 MB" },
          ].map((r, i)=>(
            <div key={i} className="flex justify-between items-center p-4 bg-white border rounded-xl shadow-sm">
              <div>
                <p className="font-medium">{r.title}</p>
                <p className="text-gray-500 text-sm">{r.date} • {r.size}</p>
              </div>
              <button className="px-4 py-2 border rounded-md hover:bg-gray-100">Download</button>
            </div>
          ))}
        </div>

      </main>
    </div>
  );
}

