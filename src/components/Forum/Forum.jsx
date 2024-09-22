import React, { useState } from 'react'
import './styles/forum.css'
import './styles/sortOptions.css'
import './styles/postlist.css'
import './styles/createPost.css'
import ForumHeader from './ForumHeader'
import SortOptions from './SortOptions'
import PostList from './PostList'
import { useNavigate } from 'react-router-dom'

export const Forum = () => {
  const [isCreating, setIsCreating] = useState(false);
  const [postTitle, setPostTitle] = useState('');
  const [postContent, setPostContent] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('General'); // Default category
  const [posts, setPosts] = useState([]); // Local state for posts

  const navigate = useNavigate();

  const handleSignOut = () => {
    navigate('/login');
    console.log('User signed out')
  }

  const handleCreatePost = () => {
    if (postTitle.trim() && postContent.trim()) {
      const newPost = {
        title: postTitle,
        content: postContent,
        category: selectedCategory, 
        commentCount: 0,
        timestamp: Date.now(), 
      }
      // Prepend the new post to the existing posts
      setPosts((prevPosts) => [newPost, ...prevPosts])
      setPostTitle('')
      setPostContent('')
      setIsCreating(false)
    }
  }

  return (
    <div className="forum">
      <ForumHeader onSignOut={handleSignOut} />

      <div className="create-post-container">
        {!isCreating ? (
          <div className="create-post-placeholder" onClick={() => setIsCreating(true)}>
            What's on your mind?
          </div>
        ) : (
          <div className="create-post-box">
            <input
              type="text"
              className="create-post-title"
              placeholder="Title of your post"
              value={postTitle}
              onChange={(e) => setPostTitle(e.target.value)}
            />
            <textarea
              className="create-post-textarea"
              placeholder="Share something..."
              value={postContent}
              onChange={(e) => setPostContent(e.target.value)}
            />
            <select
              className="create-post-category"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="General">General</option>
              <option value="Category 1">Discussion</option>
              <option value="Category 2">Category 2</option>
              <option value="Category 3">Category 3</option>
            </select>
            <div className="create-post-actions">
              <button className="create-post-cancel" onClick={() => setIsCreating(false)}>
                Cancel
              </button>
              <button className="create-post-submit" onClick={handleCreatePost}>
                Post
              </button>
            </div>
          </div>
        )}
      </div>

      <SortOptions />
      <PostList posts={posts} /> {/* Pass the posts to PostList */}
    </div>
  )
}

export default Forum
