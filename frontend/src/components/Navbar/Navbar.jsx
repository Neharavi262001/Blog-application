import React, { useState } from 'react'
import'./navbar.css'
import { Link, useNavigate } from 'react-router-dom'
import { FaBars, FaBlog, FaBlogger, FaHome, FaPlus, FaPlusCircle, FaTimes, FaUser } from 'react-icons/fa'
import { useSelector } from 'react-redux'

const Navbar = () => {
  const navigate = useNavigate()
  const {userDetails}=useSelector((state)=>state.auth)

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  return (
    <div className={`navbar ${mobileMenuOpen ? 'mobile-menu-open' : ''}`}>
        <Link to='/'><h2><FaBlogger/> Bloggle</h2></Link>
        <div className={`nav-links ${mobileMenuOpen ? 'mobile-menu' : ''}`}>

            <Link to="/" className="nav-item"><FaHome/> Home </Link>
            {userDetails && <Link to='/profile' className='nav-item'> <FaUser/> Profile</Link>}
            {userDetails ? <button  onClick={()=>navigate('/post')}><FaPlus/> Post</button> :   <Link to="/login" className="nav-item">Login</Link>}

          
        </div>
        <div className='mobile-menu-btn' onClick={toggleMobileMenu}>
              {mobileMenuOpen ? <FaTimes /> : <FaBars />}
            </div> 

        
    </div>
  )
}

export default Navbar