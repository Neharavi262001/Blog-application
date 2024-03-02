import React, { useState } from 'react';
import './profile.css';
import PostTile from '../../components/PostTile/PostTile';
import { useDeletePostMutation, useGetUserPostsQuery, useLogoutMutation } from '../../redux/userApiSlice';
import dayjs from 'dayjs';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { FaEdit, FaEnvelope, FaPen, FaSignOutAlt,  FaTrashAlt, FaUser, FaUserCircle, } from 'react-icons/fa';
import userImage from '../../images/user.png'
import { toast } from 'react-toastify';
import { clearCredentials } from '../../redux/authSlice';

const Profile = () => {
  const { data: getUserPosts, error, isLoading } = useGetUserPostsQuery();
  const [deletePost]=useDeletePostMutation()
  const [logout]=useLogoutMutation()

  const navigate = useNavigate();
  const dispatch =useDispatch()


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
      toast.success('Post deleted successfully')
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  }

 
  const handleEditPost = (postId) => {
    navigate(`/edit/${postId}`); 
  };

  const handleLogout=async()=>{
    try {
      await logout().unwrap()
      dispatch(clearCredentials())
      toast.success('Logged out ')
      navigate('/login')
    } catch (error) {
      console.log(error)
    }
  }
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
           
            <p onClick={handleLogout}> <FaSignOutAlt/> Logout</p>
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
                content={truncateDescription(item.description, 300)}
              author={item.user.name}
              date={dayjs(item.createdAt).format('DD-MM-YYYY')}
              onClick={() => navigate(`/post/${item._id}`)} 
              buttonText="Read More"
              />
              <div className="post-actions">
                <button onClick={()=>handleEditPost(item._id)}><FaEdit/></button>
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

