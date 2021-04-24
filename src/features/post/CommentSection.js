import React from "react";
import Comment from "./Comment";
import { useSelector } from "react-redux";
import Box from "@material-ui/core/Box";

const CommentSection = ({ postId }) => {
  const comments = useSelector((state) => state.post.posts[postId].comments);

  return (
    <Box width="80%" border={1} borderColor="grey.300" borderRadius={10}>
      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </Box>
  );
};

export default CommentSection;
