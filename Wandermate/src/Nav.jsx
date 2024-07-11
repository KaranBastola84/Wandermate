import React from 'react'
import { Link } from 'react-router-dom'
function Nav() {
  return (
    <>
     <nav className="justify-center items-center flex gap-32 pr-8 h-3">
            <ol>
              <Link to="/">Setup Page </Link>
              </ol>
            <ol>
            <Link to="/Login">Sign In </Link>
              </ol>
            <ol>
            <Link to="/SignUpp">Sign Up </Link>
              </ol>
            <ol>
            <Link to="/Hotels"> HOTEL </Link>
              </ol>
              <ol>
            <Link to="/Destination">DESTINATION </Link>
            </ol>

          </nav>
    </>
  )
}

export default Nav
