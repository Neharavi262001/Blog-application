import React from 'react'
import'./navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
        <Link to='/'><h2>Bloggle</h2></Link>
        <div className="nav-links">
            <Link to="/" className="nav-item">Home</Link>
            <Link to="/login" className="nav-item">Login</Link>
        </div>
    </div>
  )
}

export default Navbar