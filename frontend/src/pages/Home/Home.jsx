import React from 'react'
import './home.css'
import PostList from '../../components/PostList/PostList'
import bg from '../../images/bg.png'

const Home = () => {
  return (
    <div className='home'>
      <div className="landing-page">
      <div className="welcome-message">
          <h1>Welcome to Bloggle.</h1>
          <p>Your go-to platform for sharing and discovering amazing blog posts!</p>
          <button> <a href="#all-posts">All Posts</a></button>
        </div>
        <img src={bg} alt="" />
        
       
      </div>
      <div id="all-posts">
        <h1>All Posts</h1>
      <PostList/>
      </div>
      
    </div>
  )
}

export default Home
