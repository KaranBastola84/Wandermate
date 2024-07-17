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
            <Link to="/Hotels"> Hotel </Link>
              </ol>
              <ol>
            <Link to="/Destination">Destination </Link>
            </ol>
            <ol>
            <Link to="/TravelPackage">Travel Packages</Link>
            </ol>
            <ol>
            <Link to="/ThingsToDo">Things To Do</Link>
            </ol>
            <ol>
              <Link to="/Landing"> Landing </Link>
            </ol>
            
          </nav>
    </>
  )
}

export default Nav
