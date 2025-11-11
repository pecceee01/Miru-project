import React from "react";

const LoginPage = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-50">
      <div className="bg-white p-10 rounded-2xl shadow-md w-[420px]">
        <h1 className="text-2xl font-semibold text-center mb-2">
          Welcome to BiaBook
        </h1>
        <p className="text-gray-600 text-center mb-6">
          Sign in to your account or create a new one
        </p>

        {/* Google Button */}
        <button className="w-full flex items-center justify-center gap-2 border border-gray-300 rounded-lg py-3 font-medium hover:bg-gray-50 transition">
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
          <label className="block text-sm font-medium mb-1">
            Email address
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Disabled Email Button */}
        <button
          disabled  
          className="w-full bg-gray-100 text-gray-500 rounded-lg py-3 flex items-center justify-center gap-2 cursor-not-allowed"

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

        {/* Terms & Policy */}
        <p className="text-xs text-gray-500 text-center mt-5">
          By continuing, you agree to our
          <a href="#" className="text-blue-600 hover:underline">
            Terms of Service
          </a>
          <a href="#" className="text-blue-600 hover:underline">
            Privacy Policy
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
