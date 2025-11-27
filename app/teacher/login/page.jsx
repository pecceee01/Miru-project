"use client"
import React, { useState } from "react";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateErrors = () => {
    const formErrors = {};
    if (!formData.email.trim()) {
      formErrors.email = "Email is required";
    }
    if (!formData.password) {
      formErrors.password = "Password is required";
    }
    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateErrors()) {
      console.log("Form submitted:", formData);
      // Call API here
    }
  };

  return (
    <form
      className="flex justify-center items-center h-screen bg-gray-50"
      onSubmit={handleSubmit}
    >
      <div className="bg-white p-10 rounded-2xl shadow-md w-[420px]">
        <h1 className="text-2xl font-semibold text-center mb-2">
          Welcome to Miru
        </h1>
        <p className="text-gray-600 text-center mb-6">
          Sign in with your credentials to continue
        </p>

        {/* Google Button */}
        <button
          type="button"
          className="w-full flex items-center justify-center gap-2 border border-black rounded-lg py-3 font-medium hover:bg-gray-50 transition mb-5"
        >
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="Google"
            className="w-5 h-5"
          />
          Continue with Google
        </button>

        {/* Divider */}
        <div className="flex items-center my-5">
          <hr className="flex-grow border-gray-300" />
          <span className="px-3 text-gray-500 text-sm font-medium">OR</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        {/* Email Input */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1 text-black">
            Email address
          </label>
          <input
            name="email"
            type="email"
            placeholder="user@gmail.com"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-black rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
          />
          {errors.email && <p className="text-red-500">{errors.email}</p>}
        </div>

        {/* Password Input */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1 text-black">
            Password
          </label>
          <input
            name="password"
            type="password"
            placeholder="Password@2025"
            value={formData.password}
            onChange={handleChange}
            className="w-full border border-black rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
          />
          {errors.password && <p className="text-red-500">{errors.password}</p>}
        </div>

        {/* Continue with Email Button */}
        <button
          type="submit"
          className="w-full bg-[#897FED] cursor-pointer text-white rounded-lg py-3 flex items-center justify-center gap-2 mb-5"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M16 12H8m0 0l4-4m-4 4l4 4"
            />
          </svg>
          Continue with Email
        </button>
        <a href="/login" className="text-blue-500 hover:underline text-right block">
          {/* <Image src="/leftarrow.png" alt="Back icon" width={30} height={50}/> */}
          <span>Back</span>
        </a>
      </div>
    </form>


  );
};

export default LoginPage;
