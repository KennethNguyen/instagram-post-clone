import React from "react";
import CommentSection from "./CommentSection";
import Divider from "@material-ui/core/Divider";
import AddCommentForm from "./AddCommentForm";

/* A Post component */
const Post = () => {
  return (
    <>
      <CommentSection postId={0} />
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
