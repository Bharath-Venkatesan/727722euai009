const API_BASE_URL = 'http://20.244.56.144/test';

let authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzQzMTUxOTM1LCJpYXQiOjE3NDMxNTE2MzUsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjBmOTQ3MTg1LTY2NDMtNDE2YS1hNDgxLTY1NjViYjYwZGYzMSIsInN1YiI6IjcyNzcyMmV1YWkwMDlAc2tjZXQuYWMuaW4ifSwiY29tcGFueU5hbWUiOiJza2NldCIsImNsaWVudElEIjoiMGY5NDcxODUtNjY0My00MTZhLWE0ODEtNjU2NWJiNjBkZjMxIiwiY2xpZW50U2VjcmV0IjoiYkRwU3l5dVhmbUlyU3lVaCIsIm93bmVyTmFtZSI6IkJoYXJhdGggViIsIm93bmVyRW1haWwiOiI3Mjc3MjJldWFpMDA5QHNrY2V0LmFjLmluIiwicm9sbE5vIjoiNzI3NzIyZXVhaTAwOSJ9.ux_QmONNPWAz4b4BXejBQnhprSO0R4XVloaeKEvL4Pc';

export const fetchUsers = async () => {
  const response = await fetch(`${API_BASE_URL}/users`, {
    headers: {
      'Authorization': `Bearer ${authToken}`
    }
  });
  return await response.json();
};

export const fetchUserPosts = async (userId) => {
  const response = await fetch(`${API_BASE_URL}/users/${userId}/posts`, {
    headers: {
      'Authorization': `Bearer ${authToken}`
    }
  });
  return await response.json();
};

export const fetchPostComments = async (postId) => {
  const response = await fetch(`${API_BASE_URL}/posts/${postId}/comments`, {
    headers: {
      'Authorization': `Bearer ${authToken}`
    }
  });
  return await response.json();
};