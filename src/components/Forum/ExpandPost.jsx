import React from 'react'
import './styles/expandedpost.css'
import { useParams, useNavigate } from 'react-router-dom'
import CommentList from './Comments/CommentList'

const ExpandPost = ({ posts }) => {
  const { postId } = useParams()
  const navigate = useNavigate()
  const post = posts.find((p, index) => index === parseInt(postId))

  if (!post) {
    return <div>Post not found</div>
  }

  return (
    <div>
      <button onClick={() => navigate('/forum')} className="back-button">
        Back to Posts
      </button>
      <div className="expand-post">
        <h1>{post.title}</h1>
        <p>{post.content}</p>
        <span className="category-tag">{post.category}</span>
      </div>
      <CommentList />
    </div>
  )
}

export default ExpandPost
