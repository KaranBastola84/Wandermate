import React from 'react'
import backgroundImage from './assets/Hehe.jpg'; 

function SetupPage() {
  return (
    <>
      <div className="bg-cover bg-center h-screen"  style={{ backgroundImage: `url(${backgroundImage})` }}>
        <h1> <span className='text-blue-500 '>Explore.</span> </h1>
      </div>
    </>
  )
}

export default SetupPage
