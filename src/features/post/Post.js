import React from "react";
import { useSelector } from "react-redux";
import PostHeader from "./PostHeader";
import CommentSection from "./CommentSection";
import Divider from "@material-ui/core/Divider";
import AddCommentForm from "./AddCommentForm";

/* A Post component */
const Post = ({ postId }) => {
  // fetch the specified post from the postId props passed in
  const post = useSelector((state) => state.post.posts[postId]);
  const { creator: postCreator } = post; // destructure postCreator value for the post header
  const { comments } = post; // destructure the comments array for the comments section of the post

  return (
    <>
      <PostHeader postCreator={postCreator} />
      <CommentSection comments={comments} />
      <Divider />
      <AddCommentForm />
      {/* Portrait Version */}
      {/* From top to bottom */}
      {/* Card Header */}
      {/* Card Image */}
      {/* Card Action Bar Items; like, comment, share, bookmark  */}
      {/* Post likes */}
      {/* Comments Section */}
      {/* Add Comment Form */}

      {/* Landscape Version */}
      {/* Left Side */}
      {/* Card Image */}
      {/* Right Side*/}
      {/* Card Header */}
      {/* Comments Section */}
      {/* Card Action Bar Items; like, comment, share, bookmark  */}
      {/* Post likes */}
      {/* Post posted time elapsed */}
      {/* Add Comment Form */}
    </>
  );
};

export default Post;
