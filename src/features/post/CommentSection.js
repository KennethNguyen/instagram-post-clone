import React from "react";
import Comment from "./Comment";
import Box from "@material-ui/core/Box";

/* Container for all the comments of a post */
const CommentSection = ({ comments }) => {
  return (
    <Box width="80%" border={1} borderColor="grey.300" borderRadius={10}>
      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </Box>
  );
};

export default CommentSection;
