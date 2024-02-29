import React from 'react'

const PostTile = ({ title, content, author, date }) => {
  return (
    <div className="posts">
      <h2>{title}</h2>
      <div className="author-date">
        <p>{author}</p>
        <p>{date}</p>
      </div>
      <p>{content}</p>
    </div>
  )
}

export default React.memo(PostTile);

