import React from 'react'

const PostTile = ({ title, content, author, date,onClick,buttonText }) => {
  return (
    <div className="posts">
      <h2>{title}</h2>
      <div className="author-date">
        <p>{author}</p>
        <p>{date}</p>
      </div>
      <p>{content}</p>
      {onClick && buttonText && (
        <button className='submit-btn' onClick={onClick}>{buttonText}</button>
      )}
    </div>
  )
}

export default React.memo(PostTile);

