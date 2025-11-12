import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function login() {
    return (
        <div className=''>
            <div className='grid place-items-center mt-50 space-y-10'>
                <a href="/" className=" absolute top-30 left-5 flex items-center space-x-2 text-blue-500 hover:underline">
                    <Image src="/leftarrow.png" alt="Back icon" width={30} height={50}/>
                        <span>Back to home</span>
                </a>
                <div className='text-center mb-12'>
                    <h1 className='font-bold text-2xl text-[#897FED] mb-3'>Miru</h1>
                    <h2 className='font-bold text-2xl font- mb-2'>Welcome Back</h2>
                    <p>Select your role to continue to the dashboard</p>
                </div>

                <div className=' relative flex justify-item-center gap-4'>

                    {/* ADMIN SIGNIN */}
                    <div className='border border-gray-300 shadow-lg bg-white  p-5 rounded-2xl w-70  space-y-1'>
                        <div className='inline-block bg-purple-500 p-2 rounded-xl'> <Image src="/adminicon.png" alt="admin-icon" width={30} height={50} className='invert brightness-150 ' /> </div>
                        <h2 className='font-bold'>Admin</h2>
                        <p className='text-sm'>Manage teachers, students, and attendance</p>
                       <Link href="/admin/login">
                        <button className="mx-auto block bg-[#897FED] text-white px-10 py-2 rounded-lg text-sm">Sign in as Admin</button>
                          </Link>       
                    </div>

                    {/* TEACHER SIGNIN */}
                    <div className='border border-gray-300 shadow-lg bg-white  p-5 rounded-2xl w-70  space-y-1'>
                        <div className='inline-block bg-[#4D6FDD] p-2 rounded-xl'> <Image src="/teacher.png" alt="admin-icon" width={30} height={50} className='invert brightness-150 ' /> </div>
                        <h2 className='font-bold'>Teacher</h2>
                        <p className='text-sm'>Track class attendance and manage grades</p>
                        <button className="mx-auto block bg-[#897FED] text-white px-10 py-2 rounded-lg text-sm">Sign in as Teacher</button>
                    </div>

                    {/* STUDENT SIGNIN */}
                    <div className='border border-gray-300 shadow-lg bg-white  p-5 rounded-2xl w-70  space-y-1'>
                        <div className='inline-block bg-[#78C841] p-2 rounded-xl'> <Image src="/teacher.png" alt="admin-icon" width={30} height={50} className='invert brightness-150 ' /> </div>
                        <h2 className='font-bold'>Student</h2>
                        <p className='text-sm'>View your attendance amd performance</p>
                        <button className="mx-auto block bg-[#897FED] text-white px-10 py-2 rounded-lg text-sm">Sign in as Student</button>
                    </div>
                </div>
            </div>
        </div>

    )
}
