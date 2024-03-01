import React, { useState } from 'react';
import './profile.css';
import PostTile from '../../components/PostTile/PostTile';
import { useDeletePostMutation, useEditPostMutation, useGetUserPostsQuery } from '../../redux/userApiSlice';
import dayjs from 'dayjs';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { FaEdit, FaEnvelope, FaPen, FaSignOutAlt,  FaTrashAlt, FaUser, FaUserCircle, } from 'react-icons/fa';
import userImage from '../../images/user.png'

const Profile = () => {
  const { data: getUserPosts, error, isLoading } = useGetUserPostsQuery();
  const [deletePost]=useDeletePostMutation()
  const { userDetails } = useSelector((state) => state.auth);

  const truncateDescription = (description, maxLength) => {
    if (description.length <= maxLength) {
      return description;
    }
    return description.substring(0, maxLength) + '...';
  };

  const handleDeletePost=async(postId)=>{
    try {
      await deletePost(postId).unwrap()
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  }

  const navigate = useNavigate();
  return (
    <div className='profile-page'>
      <div className="profile-container">
        <div className="profile-card">
          <div className="left-section">
          <img className='user-image' src={ userImage} alt="Profile Picture "/>
          </div>
          <div className="right-section">
          <div className="user-details">
            
            <p> <FaUser/> {userDetails.name}</p>
            <p><FaEnvelope/> {userDetails.email}</p>
          </div>
          <div className="options">
            <p><FaPen/> Edit Profile</p>
            <p> <FaSignOutAlt/> Logout</p>
          </div>
          </div>
       
         
        </div>
        <div className="user-posts">
          <h2>My Posts</h2>
        {isLoading && <p>Loading.....</p>}
        {error && <p>Error fetching Posts:{error.message} </p>}


        <div  className='post-list'>
        {getUserPosts && getUserPosts.map((item) => (
            <div key={item._id} className="post-tile">
              <PostTile
             
                title={item.title}
                content={truncateDescription(item.description, 400)}
              author={item.user.name}
              date={dayjs(item.createdAt).format('DD-MM-YYYY')}
              onClick={() => navigate(`/post/${item._id}`)} 
              buttonText="Read More"
              />
              <div className="post-actions">
                <button><FaEdit/></button>
                <button onClick={() => handleDeletePost(item._id)}><FaTrashAlt/></button>
              </div>
             
            </div>
          ))}

        </div>
        
        </div>
      </div>
    </div>
  );
}

export default Profile;

