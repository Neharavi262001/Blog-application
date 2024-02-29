import React from 'react'
import'./navbar.css'
import { Link, useNavigate } from 'react-router-dom'
import { FaBlog, FaBlogger, FaHome, FaPlus, FaPlusCircle, FaUser } from 'react-icons/fa'
import { useSelector } from 'react-redux'

const Navbar = () => {
  const navigate = useNavigate()
  const {userDetails}=useSelector((state)=>state.auth)
  return (
    <div className='navbar'>
        <Link to='/'><h2><FaBlogger/> Bloggle</h2></Link>
        <div className="nav-links">

            <Link to="/" className="nav-item"><FaHome/> Home </Link>
            {userDetails && <Link to='/profile' className='nav-item'> <FaUser/> Profile</Link>}
            {userDetails ? <button  onClick={()=>navigate('/post')}><FaPlus/> Post</button> :   <Link to="/login" className="nav-item">Login</Link>}
          
           
        </div>
    </div>
  )
}

export default Navbar