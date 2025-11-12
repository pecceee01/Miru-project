"use client";
import Link from "next/link";
import { useState } from "react";

export default function Signup() {
  const [role, setRole] = useState(""); // "teacher" or "student"
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signup data:", { role, ...formData });
    // alert(`Signed up as ${role}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className='font-bold text-4xl text-[#897FED] text-center'>Miru</h1>
        <h1 className="text-xl font-bold mb-6 text-center">Sign Up</h1>

        {/* Role Selection */}
        <div className="mb-4">
          <label className="text-blue-400 block mb-1 font-medium">I am a:</label>
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            <option value="">Select role</option>
            <option value="teacher">Teacher</option>
            <option value="student">Student</option>
          </select>
        </div>

        {/* Conditional Form */}
        {role && (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block mb-1 font-medium">Full Name</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Enter full name"
                required
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Enter email"
                required
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Enter password"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-purple-500 text-white py-2 rounded hover:bg-purple-600 transition-colors"
            >
              Sign Up as {role.charAt(0).toUpperCase() + role.slice(1)}
            </button>
          </form>
        )}
        <Link className='text-sm mt-3 text-right text-[#4D6FDD] hover:text-[#897FED]' href={"/login"}>
                            Already have an account? <span className='underline'>Log in</span>
                        </Link>
      </div>
    </div>
  );
}
