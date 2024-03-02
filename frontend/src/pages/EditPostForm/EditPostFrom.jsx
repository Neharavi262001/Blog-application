import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useEditPostMutation, useGetSinglePostQuery } from '../../redux/userApiSlice'

const EditPostFrom = () => {
  const {id}=useParams()
  const [title,setTitle]=useState('')
  const [description,setDescription]=useState('')
  const navigate=useNavigate()

  
  const { data: getSinglePost, isLoading, error, refetch } = useGetSinglePostQuery(id);

  const [editPost] = useEditPostMutation({
    onSuccess: (editedPost) => {
      
      refetch();
      
      navigate('/profile');
    },
  });


useEffect(() => {
  if (getSinglePost) {
    setTitle(getSinglePost?.title);
    setDescription(getSinglePost?.description);
  }
}, [getSinglePost?.title,getSinglePost?.description]);


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !description) {
      toast.error('Title and description required');
    } else {
      try {
        const editedPost = { title, description };
        await editPost({ postId: id, editedPost } ).unwrap();
        toast.success('Post successfully updated')
        navigate('/profile');
      } catch (err) {
        console.error("Error editing post:", err);
        toast(err.data?.message || err.error);
      }
    }
  };
  

  return (
    <div className='form-container'>
    <h2>Edit Post</h2>
   
    <form  className="submit-form"  onSubmit={handleSubmit}>
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

        <button className='submit-btn'>Save Changes</button>
    </form>
  
  </div>
  )
}

export default EditPostFrom



