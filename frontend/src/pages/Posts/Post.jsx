import React, { useState } from 'react'
import './post.css'
import { useCreatePostMutation } from '../../redux/userApiSlice'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const Post = () => {
  const [title,setTitle]=useState('')
  const [description,setDescription]=useState('')
  const navigate=useNavigate()
 const [createPost,{isLoading,error}]=useCreatePostMutation()

 const handleSubmit = async(e)=>{
  e.preventDefault()
  if (!title || !description){
    toast.error('Title and description required')
  }else{
    try {
      const response = await createPost({title,description}).unwrap()
      navigate('/profile')
      
    } catch (error) {
      toast(err.data?.message || err.error);
    }
  }

 }
  return (
    <div className='form-container'>
      <h2>Create new Post</h2>
     
      <form  className="submit-form" onSubmit={handleSubmit}>
        <input
        className='form-input' 
          type="text" 
          name="title" 
          id="title" 
          value={title}
          onChange={(e)=>setTitle(e.target.value)}
          placeholder='Title'
        
          />

          <textarea 
          className='form-input'
          type="text" 
          name="description" 
          id="description" 
          value={description}
          onChange={(e)=>setDescription(e.target.value)}
            placeholder='Content' 
          />

          <button className='submit-btn'>Post</button>
      </form>
    
    </div>
  )
}

export default Post

