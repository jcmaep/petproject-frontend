import React from 'react'

const Comment = ({ comment }) => {
  return (
    <div className="comment">
      <p>{comment.content}</p>
      <span className="comment-author">{comment.author}</span>
    </div>
  )
}

export default Comment
