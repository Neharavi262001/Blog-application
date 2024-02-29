import React from 'react'
import {Link} from 'react-router-dom'

const Login = () => {
  return (
    <div className='form-container'>
    <h2>Login</h2>
   
    <form  className="submit-form">
      <input
      className='form-input' 
        type="email" 
        name="" 
        id="" 
        
        placeholder='Enter your email address'
        />
         <input
        className='form-input' 
        type="password" 
        name="" 
        id="" 
        
        placeholder='Enter your password'
        />
        <p>Doesn't have an account ? <Link to='/register'>Register</Link></p>
        <button className='submit-btn'>Login</button>
    </form>
  </div>

  )
}

export default Login
