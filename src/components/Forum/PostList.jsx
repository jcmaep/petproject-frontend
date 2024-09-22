import React from 'react'
import Post from './Post'

const PostList = ({ posts }) => {
    return (
        <div className="post-list">
            {posts.length > 0 ? (
                posts.map((post, index) => (
                    <div key={index} className="post-item">
                        <Post 
                            title={post.title} 
                            content={post.content} 
                            category={post.category} 
                            onUpvote={() => console.log('Upvoted', post.title)} 
                            onDownvote={() => console.log('Downvoted', post.title)} 
                            commentCount={post.commentCount}
                            initialUpvoteCount={post.initialUpvoteCount || 0}
                            initialDownvoteCount={post.initialDownvoteCount || 0}
                            postId={index}
                        />
                    </div>
                ))
            ) : (
                <div className="no-posts">No posts available</div>
            )}
        </div>
    )
}

export default PostList