import React from "react";
import PostPortrait from "./PostPortrait";
import PostLandscape from "./PostLandscape";

/* A Post component */
const Post = ({ postId, version }) => {
  return (
    <>
      {version === 1 ? (
        <PostPortrait postId={postId} />
      ) : (
        <PostLandscape postId={postId} />
      )}
    </>
  );
};

export default Post;
