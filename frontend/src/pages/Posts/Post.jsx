import React from 'react'
import './post.css'

const Post = () => {
  return (
    <div className='form-container'>
      <h2>Create new Post</h2>
     
      <form  className="submit-form">
        <input
        className='form-input' 
          type="text" 
          name="" 
          id="" 
          
          placeholder='Title'
          />

          <textarea 
          className='form-input'
            placeholder='Content' 
          />

          <button className='submit-btn'>Post</button>
      </form>
    </div>
  )
}

export default Post
