import React, { useEffect, useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { useNavigate,Link } from 'react-router-dom'
import { useRegisterMutation } from '../../redux/userApiSlice';
import { toast } from 'react-toastify'
import { setCredentials } from '../../redux/authSlice';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const navigate=useNavigate()
    const dispatch =useDispatch()

    const {userDetails}=useSelector((state)=>state.auth)
    const [register,{isLoading,error}]=useRegisterMutation()

    useEffect(()=>{
      if (userDetails){
          navigate('/profile')
      }
  },[navigate,userDetails])
   
  const handleSubmit=async(e)=>{
    e.preventDefault()
    if (password !== confirmPassword){
        toast.error('Passwords donot match')
    }else{
        try {
            const response=await register({ name, email, password }).unwrap()
            dispatch(setCredentials({...response}))
            navigate('/profile')
        } catch (err) {
          
          console.error('Error during registeration:', err);
          toast(err.data?.message || err.error);
        }
    }
} 




  return (
    <div className='form-container'>
    <h2>Register</h2>
   
    <form  className="submit-form" onClick={handleSubmit}>
    <input
      className='form-input' 
        type="text" 
        name="name" 
        value={name}
        id="name" 
        onChange={(e)=>setName(e.target.value)}
        placeholder='Enter your Username'
        />
      <input
      className='form-input' 
        type="email" 
        name="email" 
        value={email}
        id="email" 
        onChange={(e)=>setEmail(e.target.value)}
        placeholder='Enter your email address'
        />
         <input
        className='form-input' 
        type="password" 
        name="password" 
        value={password}
        id="password" 
        onChange={(e)=>setPassword(e.target.value)} 
        placeholder='Enter your password'
        />
         <input
        className='form-input' 
        type="password" 
        name="confirmPassword" 
        value={confirmPassword}
        id="confirmPassword" 
        onChange={(e) => setConfirmPassword(e.target.value)}
        placeholder='Confirm password'
        />
        <p>Already has an account ? <Link to='/login'>Login</Link></p>
        <button className='submit-btn'>{isLoading ?` Loading...` : `Register`}</button>
    </form>
  </div>
  )
}

export default Register
