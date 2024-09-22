import React, { useState } from 'react'
import Comment from './Comment'
import '../styles/commentList.css'

const CommentList = () => {
  const [comments, setComments] = useState([])
  const [commentText, setCommentText] = useState('')

  const addComment = (e) => {
    e.preventDefault()
    if (commentText.trim()) {
      const newComment = {
        content: commentText,
        author: 'User'
      }
      setComments((prevComments) => [newComment, ...prevComments])
      setCommentText('')
    }
  }

  return (
    <div>
      <form className="add-comment" onSubmit={addComment}>
        <textarea
          placeholder="Add a comment..."
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      <div className="comment-list">
        {comments.map((comment, index) => (
          <Comment key={index} comment={comment} />
        ))}
      </div>
    </div>
  )
}

export default CommentList
