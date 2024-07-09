import React from 'react'
import backgroundImage from './assets/Hehe.jpg'; 

function SetupPage() {
  return (
    <>
      <div className="bg-cover bg-center h-screen"  style={{ backgroundImage: `url(${backgroundImage})` }}>
      <h1> <span className='text-yellow-600 mt-3 text-3xl ml-8 '>Explore.</span> </h1> 
      <nav className='mx-auto flex h-16 items-center justify-center'> 
        <li>
            About
        </li>
        <li>Tours</li>
        <li>Sale</li>
        <li>Contact</li>
      </nav>
      
      </div>
    </>
  )
}

export default SetupPage
