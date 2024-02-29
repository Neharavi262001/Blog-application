import React,{useEffect, useState} from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
import { toast } from 'react-toastify'

import { setCredentials } from '../../redux/authSlice'
import { useLoginMutation } from '../../redux/userApiSlice'

const Login = () => {
  const [formData,setFormData]=useState({
    email:'',
    password:''
    
})
const {email,password}=formData

const navigate=useNavigate()
const dispatch =useDispatch()

const [login,{isLoading,error}]=useLoginMutation()
const handleOnChange=(e)=>{
  setFormData((prevState)=>({
      ...prevState,
      [e.target.name]:e.target.value
  }))
}
const handleSubmit=async(e)=>{
  e.preventDefault()
  try {
      const response=await login(formData).unwrap()
      dispatch(setCredentials({...response}))
      navigate('/profile')
  } catch (err) {
      console.error('Error during login:', err);
      toast(err.data?.message || err.error);
  }
}

  return (
    <div className='form-container'>
    <h2>Login</h2>
   
    <form  className="submit-form" onSubmit={handleSubmit}>
      <input
       type="email"
       className='form-input'
       id='email'
       name='email'
       value={email}
       placeholder='Enter your email address'
       onChange={handleOnChange}
        />
         <input
        type="password"
        className='form-input'
        id='password'
        name='password'
        value={password}
        placeholder='Enter your password'
        onChange={handleOnChange}
        />
        <p>Doesn't have an account ? <Link to='/register'>Register</Link></p>
        <button className='submit-btn'>{isLoading ?` Loading...` : `Login`}</button>
    </form>
  </div>

  )
}

export default Login
