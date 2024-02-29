import React from 'react'
import PostTile from '../PostTile/PostTile'
import { useNavigate } from 'react-router-dom';
import { useGetAllPostsQuery } from '../../redux/userApiSlice';
import dayjs from 'dayjs'

const PostList = () => {
  const navigate=useNavigate()
  const {data:getAllPosts,error,isLoading}=useGetAllPostsQuery()
  console.log(getAllPosts)
  
  return (
    <div className='post-list'>
      {isLoading && <p>Loading.....</p>}
      {error && <p>Error fetching Posts:{error.message} </p>}
      {getAllPosts && getAllPosts.map((item) => (
            <PostTile
              key={item._id}
              title={item.title}
              content={item.description}
              author={item.user.name}
              date={dayjs(item.createdAt).format('DD-MM-YYYY')}
            />
      ))}
    </div>
  )
}

export default PostList

