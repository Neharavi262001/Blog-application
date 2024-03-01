import React, { useEffect } from 'react'
import './blogpost.css'
import { useGetSinglePostQuery } from '../../redux/userApiSlice'
import { useParams } from 'react-router-dom'
import dayjs from 'dayjs'

const BlogPost = () => {
  const {id}=useParams()
  const {data:getSinglePost,error,isLoading}=useGetSinglePostQuery(id)
  //const { title, createdAt, user, description } = getSinglePost;
  console.log('getSinglePost', getSinglePost)
  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  if (!getSinglePost) {
    return <p>Post not found</p>;
  }

  const { title, createdAt, user, description } = getSinglePost;
  return (
    
    <div className='blog-post'>
      

     <h1>{title}</h1>
     <div className="post-details">
        <p>{user.name}</p>
        <p>{dayjs(createdAt).format('DD-MM-YYYY')}</p>
     </div>
     <p>
        {description}
     </p>
     
    </div>
  )
}

export default BlogPost
