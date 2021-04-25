import React from "react";
import Comment from "./Comment";
import List from "@material-ui/core/List";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";

/* Container for all the comments of a post */
/* If the post is portrait, we only want to display the first and last 2 comments. */
/* If there are more than 3 comments, a "View all comments" button" */
/* If the post is landscape, we display all comments as usual but with a scrollable window for more than 4 comments */
const CommentList = ({ comments, isLandscape }) => {
  return (
    <CardContent style={{ padding: 0, overflow: "auto", maxHeight: 324 }}>
      <List>
        {!isLandscape && (
          <>
            {comments.slice(0, 1).map((comment) => (
              <Comment
                key={comment.id}
                comment={comment}
                isLandscape={isLandscape}
              />
            ))}{" "}
            {comments.length > 3 && (
              <Button
                disableRipple
                style={{
                  color: "grey",
                  textTransform: "none",
                  backgroundColor: "transparent",
                  padding: "1px 0 0 0",
                  minWidth: 0,
                  marginLeft: "1rem",
                }}
              >
                View all {comments.length} comments
              </Button>
            )}
            {comments.slice(-2).map((comment) => (
              <Comment
                key={comment.id}
                comment={comment}
                isLandscape={isLandscape}
              />
            ))}
          </>
        )}
        {isLandscape &&
          comments.map((comment) => (
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
