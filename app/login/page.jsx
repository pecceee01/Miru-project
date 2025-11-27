import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
export default function login() {
    return (
        <div className=''>
            <div className='grid place-items-center mt-30 space-y-10'>
                <div className='text-center mb-12'>
                     <a href="/" className=" absolute top-30 left-86 flex items-center space-x-2 text-blue-500 hover:underline">
                    <Image src="/leftarrow.png" alt="Back icon" width={30} height={50}/>
                        <span>Back to home</span>
                </a>
                
                    <h1 className='font-bold text-2xl text-[#897FED] mt-20 mb-3'>Miru</h1>
                    <h2 className='font-bold text-2xl font- mb-2'>Welcome Back</h2>
                    <p>Select your role to continue to the dashboard</p>
                </div>

                <div className=' relative flex justify-item-center gap-4'>

                    {/* ADMIN SIGNIN */}
                    <div className='border border-gray-300 shadow-lg bg-white  p-5 rounded-2xl w-70  space-y-1'>
                        <div className='inline-block bg-purple-500 p-2 rounded-xl'> <Image src="/adminicon.png" alt="admin-icon" width={30} height={50} className='invert brightness-150 ' /> </div>
                        <h2 className='font-bold'>Admin</h2>
                        <p className='text-sm mb-4'>Manage teachers, students, and attendance</p>
                       <Link href="/admin/login">
                        <button className="mx-auto block bg-[#897FED] text-white px-10 py-2 rounded-lg text-sm">Sign in as Admin</button>
                          </Link>       
                    </div>

                    {/* TEACHER SIGNIN */}
                    <div className='border border-gray-300 shadow-lg bg-white  p-5 rounded-2xl w-70  space-y-1'>
                        <div className='inline-block bg-[#4D6FDD] p-2 rounded-xl'> <Image src="/teacher.png" alt="admin-icon" width={30} height={50} className='invert brightness-150 ' /> </div>
                        <h2 className='font-bold'>Teacher</h2>
                        <p className='text-sm mb-4'>Track class attendance and manage grades</p>
                      <Link href="/teacher/login">
                        <button className="mx-auto block bg-[#897FED] text-white px-10 py-2 rounded-lg text-sm">Sign in as Teacher</button>
                      </Link>       
                    </div>

                    {/* STUDENT SIGNIN */}
                    <div className='border border-gray-300 shadow-lg bg-white  p-5 rounded-2xl w-70  space-y-1'>
                        <div className='inline-block bg-[#78C841] p-2 rounded-xl'> <Image src="/teacher.png" alt="admin-icon" width={30} height={50} className='invert brightness-150 ' /> </div>
                        <h2 className='font-bold'>Student</h2>
                        <p className='text-sm mb-4'>View your attendance amd performance</p>
                        <button className="mx-auto block bg-[#897FED] text-white px-10 py-2 rounded-lg text-sm">Sign in as Student</button>
                    </div>
                </div>
                <Link className='p-3 bg-[#897FED] text-sm mt-3 text-right text-black rounded-xl hover:text-white' href={"/signup"}>
                            Don't have an account? <span className='underline'>Sign up</span>
                        </Link>
            </div>
        </div>

    )
}
