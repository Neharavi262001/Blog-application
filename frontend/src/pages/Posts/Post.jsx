import React from 'react'
import './post.css'

const Post = () => {
  return (
    <div className='add-post'>
      <h2>Create new Post</h2>
     
      <form  className="post-form">
        <input
        className='post-input' 
          type="text" 
          name="" 
          id="" 
          
          placeholder='Title'
          />

          <textarea 
          className='post-input'
            placeholder='Content'
            
          />

          <button className='submit-btn'>Post</button>
      </form>

  
     

    </div>
  )
}

export default Post
