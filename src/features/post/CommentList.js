import React from "react";
import Comment from "./Comment";
import List from "@material-ui/core/List";
import CardContent from "@material-ui/core/CardContent";

/* Container for all the comments of a post */
const CommentList = ({ comments, isLandscape }) => {
  return (
    <CardContent style={{ padding: 0 }}>
      <List>
        {comments.map((comment) => (
          <Comment
            key={comment.id}
            comment={comment}
            isLandscape={isLandscape}
          />
        ))}
      </List>
    </CardContent>
  );
};

export default CommentList;
