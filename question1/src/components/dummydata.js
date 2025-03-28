export const getDummyUsers = () => {
    return {
      users: {
        "1": "John Doe",
        "10": "Helen Moore",
        "11": "Ivy Taylor",
        "12": "Jack Anderson",
        "13": "Kathy Thomas",
        "14": "Liam Jackson",
        "15": "Mona Harris",
        "16": "Nathan Clark",
        "17": "Olivia Lewis",
        "18": "Paul Walker",
        "19": "Quinn Scott"
      }
    };
  };
  
  export const getDummyPosts = (userId) => {
    const userPosts = {
      "1": [
        { id: 246, userid: 1, content: "Post about ant", timestamp: Date.now() - 100000 },
        { id: 161, userid: 1, content: "Post about elephant", timestamp: Date.now() - 200000 }
      ],
      "10": [
        { id: 342, userid: 10, content: "Beautiful sunset today", timestamp: Date.now() - 300000 },
        { id: 456, userid: 10, content: "Working on a new project", timestamp: Date.now() - 400000 }
      ],
      "11": [
        { id: 567, userid: 11, content: "Just finished reading a great book", timestamp: Date.now() - 500000 }
      ]
    };
    return { posts: userPosts[userId] || [] };
  };
  
  export const getDummyComments = (postId) => {
    const postComments = {
      "246": [
        { id: 3893, postid: 246, content: "Old comment" },
        { id: 4791, postid: 246, content: "Boring comment" }
      ],
      "161": [
        { id: 5892, postid: 161, content: "Interesting post!" }
      ],
      "342": [
        { id: 6893, postid: 342, content: "Nice photo!" },
        { id: 7894, postid: 342, content: "Where was this taken?" }
      ]
    };
    return { comments: postComments[postId] || [] };
  };