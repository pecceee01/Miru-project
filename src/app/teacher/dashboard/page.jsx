import Image from 'next/image'
import React from 'react'

export default function teacherDashboard() {
    return (
        <div className='flex'>
            <div className=' relative w-[250px] b-gray-200 p-4 h-screen border-r-1 border-gray-400'>
                <h1 className='font-bold text-2xl text-[#897FED] mb-1'>Miru</h1>
                <p className='text-sm text-gray-400'>Teacher Portal</p>
                <div className='-mx-4 h-[1px] bg-gray-400 my-4'></div>
                <div className='space-y-1'>
                    {/* DASHBOARD */}
                    <a href="/" className="bg-white flex items-center space-x-3 px-4 py-3 rounded-lg text-blue-500 hover:bg-green-100">
                        <Image src="/dashboard.png" alt="Dashboard" width={20} height={10} />
                        <span>Dashboard</span>
                    </a>
                    {/* CLASS ATTENDANCE */}
                    <a href="/" className="bg-white flex items-center space-x-3 px-4 py-3 rounded-lg text-blue-500 hover:bg-green-100">
                        <Image src="/calender.png" alt="Class Attendance" width={20} height={10} />
                        <span>Class Attendance</span>
                    </a>
                    {/* REPORTS */}
                    <a href="/" className="bg-white flex items-center space-x-3 px-4 py-3 rounded-lg text-blue-500 hover:bg-green-100">
                        <Image src="/report.png" alt="report" width={20} height={10} />
                        <span>Reports</span>
                    </a>
                    {/* Announcements */}
                    <a href="/" className="bg-white flex items-center space-x-3 px-4 py-3 rounded-lg text-blue-500 hover:bg-green-100">
                        <Image src="/announcement.png" alt="Announcement" width={20} height={10} />
                        <span>Announcement</span>
                    </a>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                    <div className='-mx-4 h-[1px] bg-gray-400 my-4'></div>

                    <button className="w-full bg-white flex items-center space-x-3 px-4 py-3 rounded-lg text-blue-500 hover:bg-[#EE4E9A] hover:text-white">
                        <Image src="/logout.png" alt="LogOut" width={20} height={10} />
                        <span>Logout</span>
                    </button>

                </div>
            </div>

            <div>
                <div>
                    <h1>Welcome back, Mr. Johnson</h1>

                    <button></button>

                    <div>

                    </div>
                </div>

            </div>
        </div>
    )
}
