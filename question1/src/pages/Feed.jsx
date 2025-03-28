
import React, { useEffect, useState } from 'react';
import { getDummyUsers, getDummyPosts } from '../components/dummydata';
import PostCard from '../components/PostCard';
import LoadingSpinner from '../components/LoadingSpinner';

const Feed = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState({});

  useEffect(() => {

    setTimeout(() => {

      const usersResponse = getDummyUsers();
      const usersMap = Object.entries(usersResponse.users).reduce((acc, [id, name]) => {
        acc[id] = { id, name };
        return acc;
      }, {});
      setUsers(usersMap);
      
      const allPosts = [];
      const userIds = Object.keys(usersMap);
      
      for (const userId of userIds) {
        const postsResponse = getDummyPosts(userId);
        if (postsResponse.posts) {
          allPosts.push(...postsResponse.posts.map(post => ({ 
            ...post, 
            userId,
            timestamp: post.timestamp || Date.now() - Math.floor(Math.random() * 1000000)
          })));
        }
      }
      const sortedPosts = allPosts.sort((a, b) => b.timestamp - a.timestamp);
      
      setPosts(sortedPosts.map(post => ({
        ...post,
        user: usersMap[post.userId]
      })));
      setLoading(false);
    }, 600); 
  }, []);

  if (loading) return <LoadingSpinner />;

  return (
    <div className="page-container">
      <h1>Live Feed</h1>
      <div className="posts-container">
        {posts.length > 0 ? (
          posts.map(post => (
            <PostCard 
              key={post.id} 
              post={post} 
              commentCount={0} 
              user={post.user} 
            />
          ))
        ) : (
          <p>No posts found.</p>
        )}
      </div>
    </div>
  );
};

export default Feed;