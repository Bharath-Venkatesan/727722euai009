import React, { useEffect, useState } from 'react';
import { getDummyUsers, getDummyPosts, getDummyComments } from '../components/dummydata';
import PostCard from '../components/PostCard';
import LoadingSpinner from '../components/LoadingSpinner';

const TrendingPosts = () => {
  const [trendingPosts, setTrendingPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState({});
  const [expandedPostId, setExpandedPostId] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
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
            allPosts.push(...postsResponse.posts.map(post => ({ ...post, userId })));
          }
        }
        
        // Process posts with comments
        const postsWithComments = await Promise.all(
          allPosts.map(async post => {
            const commentsResponse = getDummyComments(post.id);
            return {
              ...post,
              comments: commentsResponse.comments || [],
              commentCount: commentsResponse.comments?.length || 0,
              user: usersMap[post.userId]
            };
          })
        );
        
        const maxComments = Math.max(...postsWithComments.map(p => p.commentCount));
        const trending = postsWithComments.filter(p => p.commentCount === maxComments && p.commentCount > 0);
        
        setTrendingPosts(trending);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    setTimeout(() => {
      fetchData();
    }, 800);
  }, []);

  const toggleComments = (postId) => {
    setExpandedPostId(expandedPostId === postId ? null : postId);
  };

  if (loading) return <LoadingSpinner />;

  return (
    <div className="page-container">
      <h1>Trending Posts</h1>
      <div className="posts-container">
        {trendingPosts.length > 0 ? (
          trendingPosts.map(post => (
            <div key={post.id} className="post-container">
              <PostCard 
                post={post} 
                commentCount={post.commentCount} 
                user={post.user}
                onCommentClick={() => toggleComments(post.id)}
              />
              {expandedPostId === post.id && (
                <div className="comments-section">
                  <h3>Comments ({post.commentCount})</h3>
                  {post.comments.map(comment => (
                    <div key={comment.id} className="comment">
                      <div className="comment-content">{comment.content}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))
        ) : (
          <p>No trending posts found.</p>
        )}
      </div>
    </div>
  );
};

export default TrendingPosts;