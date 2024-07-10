import React from 'react'
import { useState } from 'react';

export default function Login() {
  
  const [formData,setFormData] = useState({
    email: '',
    password: ''
  })
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted",formData);
  }

  const handleChange = (e) => {
    
    const {name,value} = e.target;
    setFormData({...formData,[name]:value});
  }

  return (
   <>
   <div className='flex w-full'>
   <div className="flex min-h-full flex-1 flex-col justify-start lg:px-8 ml-40 mt-20">
        <div className=" sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-6  sm:max-w-sm">
          <form action="#" method="POST" className="space-y-6 on " onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-800 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
                <div className="text-sm">
                  <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  autoComplete="current-password"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 sm:text-sm sm:leading-6"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
              <div class="flex items-center mt-3">
              <input id="default-checkbox" type="checkbox"/>
              <label for="default-checkbox" class="ms-3 text-sm font-medium text-gray-500">Remember me</label>
              </div>  
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                Sign in
              </button>
            </div>
            <div>
              <p className='flex w-full justify-center'>New Here?   <span className='text-blue-500 ml-1'>   Sign Up</span> </p>
            </div>
          </form>
        </div>
      </div>

   </div>
       </>
  )
}
