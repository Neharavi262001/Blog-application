import React from 'react'
import './profile.css'
import PostTile from '../../components/PostTile/PostTile'

const Profile = () => {
  return (
    <div className='profile-page'>
        <div className="profile-container">
          <div className="left-sectiion">
            profile-image
          </div>
          <div className="right-section">
            <p>Name</p>
            <p>email</p>
          </div>

        </div>
       <button className='submit-btn'>New Post</button>
        <div className="user-posts">
        <PostTile/>
        <button>Edit</button>
        <button>Delete</button>
        </div>
    </div>
  )
}

export default Profile
