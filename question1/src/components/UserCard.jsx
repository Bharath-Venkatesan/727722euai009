
import React from 'react';

const UserCard = ({ user, postCount, rank }) => {
  const randomAvatar = `https://i.pravatar.cc/150?img=${rank}`;
  
  return (
    <div className="user-card">
      <div className="rank">{rank}</div>
      <img src={randomAvatar} alt={user.name} className="avatar" />
      <div className="user-info">
        <h3>{user.name}</h3>
        <p>{postCount} posts</p>
      </div>
    </div>
  );
};

export default UserCard;