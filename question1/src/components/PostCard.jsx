import React from 'react';

const PostCard = ({ post, commentCount, user }) => {
  const randomImage = `https://picsum.photos/600/400?random=${post.id}`;
  
  return (
    <div className="post-card">
      <div className="post-header">
        <img 
          src={`https://i.pravatar.cc/40?img=${user.id}`} 
          alt={user.name} 
          className="user-avatar" 
        />
        <span className="username">{user.name}</span>
      </div>
      <img src={randomImage} alt="Post" className="post-image" />
      <div className="post-content">
        <p>{post.content}</p>
      </div>
      <div className="post-footer">
        <span className="comments">{commentCount} comments</span>
      </div>
    </div>
  );
};

export default PostCard;