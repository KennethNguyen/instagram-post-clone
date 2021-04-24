import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [
    {
      id: 0,
      creator: {
        username: "kingkong123",
        location: "Los Angeles, California",
        profilePicture: "/static/images/avatar/1.jpg",
      },
      likes: 0,
      comments: [
        {
          id: 0,
          postedBy: "John",
          profilePicture: "/static/images/avatar/2.jpg",
          message: "Hey everyone! First post!",
          liked: false,
          replies: [],
          repliedTo: null,
        },
        {
          id: 1,
          postedBy: "Sarah",
          profilePicture: "/static/images/avatar/3.jpg",
          message: "Cool!!!",
          liked: false,
          replies: [],
          repliedTo: null,
        },
        {
          id: 2,
          postedBy: "Jimmy",
          profilePicture: "/static/images/avatar/4.jpg",
          message: "Nice one.",
          liked: false,
          replies: [],
          repliedTo: null,
        },
      ],
    },
  ],
};

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    // add a new comment to the specified post's comments array
    addComment: (state, action) => {
      state.posts[action.payload.postId].comments.push(
        action.payload.newComment
      );
    },
    // toggle the specified comment's like property
    toggleCommentLike: (state, action) => {
      let comment = state.posts[action.payload.postId].comments.find(
        ({ id }) => id === action.payload.commentId
      );
      comment.liked = !comment.liked;
    },
    // fetch the user's local storage posts if available rather than use the client's starting mock data
    fetchPosts: (state) => {
      const { posts } = JSON.parse(localStorage.getItem("posts")); // destructuring the item key "posts" from local storage
      state.posts = posts; // set the redux store 'posts' state to be from local storage
    },
  },
});

export const { addComment, toggleCommentLike, fetchPosts } = postSlice.actions;

export default postSlice.reducer;
