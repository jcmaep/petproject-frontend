import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faThumbsDown, faComment } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

export const Post = ({ title, content, category, onUpvote, onDownvote, commentCount, initialUpvoteCount = 0, initialDownvoteCount = 0, postId }) => {
    const [upvoted, setUpvoted] = useState(false)
    const [downvoted, setDownvoted] = useState(false)
    const [upvoteCount, setUpvoteCount] = useState(initialUpvoteCount)
    const [downvoteCount, setDownvoteCount] = useState(initialDownvoteCount)

    useEffect(() => {
        setUpvoted(false)
        setDownvoted(false)
        setUpvoteCount(initialUpvoteCount)
        setDownvoteCount(initialDownvoteCount)
    }, [initialUpvoteCount, initialDownvoteCount])

    const handleUpvote = (e) => {
        e.stopPropagation()
        setUpvoted(!upvoted)
        setUpvoteCount(upvoted ? upvoteCount - 1 : upvoteCount + 1)
        if (downvoted) {
            setDownvoted(false)
            setDownvoteCount(downvoteCount - 1)
            onDownvote()
        }
        onUpvote()
    }

    const handleDownvote = (e) => {
        e.stopPropagation()
        setDownvoted(!downvoted)
        setDownvoteCount(downvoted ? downvoteCount - 1 : downvoteCount + 1)
        if (upvoted) {
            setUpvoted(false)
            setUpvoteCount(upvoteCount - 1)
            onUpvote()
        }
        onDownvote()
    }

    return (
        <div className="post">
            <Link to={`/forum/post/${postId}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="post-content" onClick={(e) => e.stopPropagation()}>
                    <h2>{title}</h2>
                    <p>{content}</p>
                    <span className="category-tag">{category}</span>
                </div>
            </Link>
            <div className="post-actions">
                <div className="left-actions">
                    <button 
                        onClick={handleUpvote}
                        style={{ backgroundColor: upvoted ? '#28a745' : '#007BFF' }}
                    >
                        <FontAwesomeIcon icon={faThumbsUp} />
                    </button>
                    <span className="vote-count">{upvoteCount}</span>
                    <button 
                        onClick={handleDownvote}
                        style={{ backgroundColor: downvoted ? '#dc3545' : '#007BFF' }}
                    >
                        <FontAwesomeIcon icon={faThumbsDown} />
                    </button>
                    <span className="vote-count">{downvoteCount}</span>
                </div>
                <div className="right-actions">
                    <span className="action-button">
                        <FontAwesomeIcon icon={faComment} /> {commentCount}
                    </span>
                    <Link to={`/forum/post/${postId}`} className="view-comments-button">
                        <FontAwesomeIcon icon={faComment} /> View Comments
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Post