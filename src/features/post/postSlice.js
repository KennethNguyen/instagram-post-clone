import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [
    {
      id: 0,
      creator: {
        username: "kingkong123",
        location: "Los Angeles, California",
        profilePicture: "1",
      },
      media: "flower",
      likes: 23,
      createdAt: "2021-04-23T14:48:00.000Z",
      isLandscape: false,
      comments: [
        {
          id: 0,
          postedBy: "John",
          profilePicture: "2",
          message: "Hey everyone! First post!",
          liked: false,
          replies: [],
          repliedTo: null,
        },
        {
          id: 1,
          postedBy: "Sarah",
          profilePicture: "3",
          message: "Cool!!!",
          liked: false,
          replies: [],
          repliedTo: null,
        },
        {
          id: 2,
          postedBy: "Krystal",
          profilePicture: "4",
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
