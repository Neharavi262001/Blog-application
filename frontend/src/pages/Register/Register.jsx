import React from 'react'
import {Link} from 'react-router-dom'

const Register = () => {
  return (
    <div className='form-container'>
    <h2>Register</h2>
   
    <form  className="submit-form">
    <input
      className='form-input' 
        type="text" 
        name="" 
        id="" 
        placeholder='Enter your Username'
        />
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
         <input
        className='form-input' 
        type="password" 
        name="" 
        id="" 
        placeholder='Confirm password'
        />
        <p>Already has an account ? <Link to='/login'>Login</Link></p>
        <button className='submit-btn'>Register</button>
    </form>
  </div>
  )
}

export default Register
