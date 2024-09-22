import React from 'react'

export const ForumHeader = ({onSignOut}) => {
  return (
    <header className="forum-header">
      <h1>Forum Title</h1>
      <button className = "forum-header" onClick={onSignOut}>Sign Out</button>
    </header>
  )
}

export default ForumHeader