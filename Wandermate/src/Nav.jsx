import React from 'react'
import { Link } from 'react-router-dom'
function Nav() {
  return (
    <>
     <nav className=" justify-center flex gap-8 pr-8 h-3 flex-wrap">
        
            <ol>
            <Link to="/"> Home </Link>
             </ol>
            <ol>
            <Link to="/Login">Sign Up </Link>
              </ol>
            <ol>
            <Link to="/SignUpp">Sign In </Link>
              </ol>
            <ol>
              <Link to="/Home"> ARKO LOGIN  </Link>
            </ol>
            
          </nav>
    </>
  )
}

export default Nav
