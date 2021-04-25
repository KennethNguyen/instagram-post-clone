import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts } from "./postSlice";
import Post from "./Post";

/* Container for all the posts to be populated */
const PostsContainer = () => {
  const posts = useSelector((state) => state.post); // the 'posts' array from the redux store
  const dispatch = useDispatch();

  useEffect(() => {
    const localData = JSON.parse(localStorage.getItem("posts")); // retrieve the posts data from user's local storage

    // if the posts data does exist, then we set the posts value from local storage to the store to reflect most updated data
    if (localData) {
      dispatch(fetchPosts());
    }
  }, [dispatch]);

  // set and update the posts data to local storage whenever the state changes
  useEffect(() => {
    localStorage.setItem("posts", JSON.stringify(posts));
  }, [posts]);

  return (
    <>
      {/* Map all posts */}
      <Post postId={0} version={1} />
      <Post postId={0} version={2} />
    </>
  );
};

export default PostsContainer;
