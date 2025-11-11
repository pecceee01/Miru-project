"use client"
import React, { useState } from "react";

const LoginPage = () => {

    const [formData,setFormData]=useState({
        password:"",
        email:""
    })

    const [errors, setErrors]=useState({})

    const [event,setEvent]=useState('')


    const [todo, setTodo]=useState(["movies','cooking", 'date', 'learning', 'google authenticator'])

    // const 

    const  handleChange=(e)=>{
        const {name,value}=e.target
        setFormData({...formData, 
            [name]:value
        })
    }

    const validateErrors=()=>{
        const formErrors={}
        if(!formData.email.trim()){
            formErrors.email="Email is required"
        }

        if(!formData.password){
            formErrors.password="PAssword is required"
        }
        setErrors(formErrors)
        return Object.keys(formErrors).length==0
    }
    
    const handleSumbit=(e)=>{
        e.preventDefault()

        if(validateErrors()){
            // send user data to api
            console.log("form submitted")
        }
        // console.log(e)

        // how to handle array useState
        // setTodo([...todo, event])
        // console.log(todo)
    }


  return (
    <form className="flex justify-center items-center h-screen bg-gray-50" onSubmit={handleSumbit}>
      <div className="bg-white p-10 rounded-2xl shadow-md w-[420px]">
        <h1 className="text-2xl font-semibold text-center mb-2">
          Welcome to BiaBook
        </h1>
        <p className="text-gray-600 text-center mb-6">
          Sign in to your account or create a new one
        </p>

        {/* Google Button */}
        <button className="w-full flex items-center justify-center gap-2 border border-black  rounded-lg py-3 font-medium hover:bg-gray-50 transition">
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
            className="w-full border border-black rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
          />
          {errors.email && (<p className="text-red-500">{errors.email}</p>)}
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
            className="w-full border border-black rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
          />
        </div>

        {/* Disabled Email Button */}
        <button
            
          className="w-full bg-blue-400 cursor-pointer text-white rounded-lg py-3 flex items-center justify-center gap-2 "

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

      <input type="text"  className="bg-green-600" onChange={(e)=>setEvent(e.target.value)}/>


      <div>
        <p>TO do</p>
        {
            todo.map((event)=>(
                <li key={event} className="text-red-500">{event}</li>

            ))
        }
       
      </div>
    </form>
  );
};

export default LoginPage;
