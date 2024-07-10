import React from 'react'
import {useState} from 'react'
function SignUpp() {
  const [formData,setFormData] = useState({
    txt: '',
    email:'',
    password: '',
    confirmpassword:''
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
            <span className='text-blue-500'>Sign Up</span>
          </h2>
          <div className="mt-6  sm:max-w-sm">
          <form action="#" method="POST" className="space-y-6" onSubmit={handleSubmit} >
          <div>
              <div className="mt-2">
                <input
                  name="txt"
                  type="text"
                  required
                  placeholder='  Username'
                  className="block w-full rounded-md border-0 py-1.5 text-gray-800 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
                  value={formData.txt}
                  onChange={handleChange}
                />
              </div>
              <div className="mt-6">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder='  Email address'
                  className="block w-full rounded-md border-0 py-1.5 text-gray-800 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
                  value={formData.email}
                  onChange={handleChange}/>
              </div>
              <div className="mt-6">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  autoComplete="current-password"
                  placeholder='  Enter Password'
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 sm:text-sm sm:leading-6"
                 value={formData.password}
                  onChange={handleChange}
                />
              </div>
              <div className="mt-6">
                <input
                  id="confirmpassword"
                  name="confirmpassword"
                  type="password"
                  required
                  autoComplete="current-password"
                  placeholder='  Confirm Password'
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 sm:text-sm sm:leading-6"
                  value={formData.confirmpassword}
                  onChange={handleChange}
                />
                
              </div>       
             <div>
              <button
                type="submit"
                className=" mt-6 flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                Sign Up
              </button>
              <div className="flex items-center mt-4 justify-center ">
              <input id="default-checkbox" type="checkbox"/>
              <label htmlFor="default-checkbox" className="ms-3 text-sm font-medium text-gray-500">I agree to all  <span className='text-blue-500 '>Terms and Conditions</span></label>
              </div>

            </div>
            </div>
          </form>
          </div>
        </div>
    </div>
  </div>
  </>
  )
}

export default SignUpp
