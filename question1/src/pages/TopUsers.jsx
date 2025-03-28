import React, { useEffect, useState } from 'react';
import { getDummyUsers, getDummyPosts } from '../components/dummydata';
import UserCard from '../components/UserCard';
import LoadingSpinner from '../components/LoadingSpinner';

const TopUsers = () => {
  const [topUsers, setTopUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  
    setTimeout(() => {
      const usersResponse = getDummyUsers();
      const users = Object.entries(usersResponse.users).map(([id, name]) => ({ id, name }));
      
      const usersWithPostCounts = users.map(user => {
        const postsResponse = getDummyPosts(user.id);
        return {
          ...user,
          postCount: postsResponse.posts?.length || 0
        };
      });
      
      const sortedUsers = usersWithPostCounts
        .sort((a, b) => b.postCount - a.postCount)
        .slice(0, 5);
      
      setTopUsers(sortedUsers);
      setLoading(false);
    }, 500);
  }, []);

  if (loading) return <LoadingSpinner />;

  return (
    <div className="page-container">
      <h1>Top Users</h1>
      <div className="users-grid">
        {topUsers.map((user, index) => (
          <UserCard 
            key={user.id} 
            user={user} 
            postCount={user.postCount} 
            rank={index + 1} 
          />
        ))}
      </div>
    </div>
  );
};

export default TopUsers;