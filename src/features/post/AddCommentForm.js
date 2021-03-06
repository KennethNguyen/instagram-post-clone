import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addComment, resetReplyState, addReply } from "./postSlice";
import Box from "@material-ui/core/Box";
import InputBase from "@material-ui/core/InputBase";
import Button from "@material-ui/core/Button";

/* Form to add a new comment to an instagram post */
const AddCommentForm = () => {
  // fetch the comments array of the current post; used for creation of new comment id
  const replying = useSelector((state) => state.post.posts[0].replying);
  const [isReply, replyTo] = replying; // isReply is a boolean, replyTo is the int id of the comment to reply to
  const comments = useSelector((state) => state.post.posts[0].comments);
  const dispatch = useDispatch();
  const [comment, setComment] = useState("");

  /* monitor the replying state if user decides to reply to someone else */
  useEffect(() => {
    setComment(isReply ? `@${comments[replyTo].postedBy} ` : "");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [replying]);

  // controlled input
  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  // dispatch the new comment to add and the current post id, reset input
  const handleSubmitComment = (event) => {
    event.preventDefault();
    const newComment = {
      id: isReply ? comments[replyTo].replies.length : comments.length,
      postedBy: JSON.parse(localStorage.getItem("user")).username,
      profilePicture: "5",
      message: comment,
      liked: false,
      replies: [],
      repliedTo: isReply ? replyTo : null,
    };
    if (isReply) {
      dispatch(addReply({ newReply: newComment, postId: 0, commentId: replyTo }));
      dispatch(resetReplyState({ postId: 0 }));
    } else {
      dispatch(addComment({ newComment, postId: 0 }));
    }
    setComment("");
  };

  return (
    <Box padding={1} marginLeft="auto" marginRight="auto" width="90%">
      <form style={{ display: "flex" }} onSubmit={handleSubmitComment}>
        <InputBase
          placeholder="Add a comment..."
          fullWidth={true}
          value={comment}
          onChange={handleCommentChange}
        />
        <Button
          color="primary"
          style={{
            fontWeight: 600,
            textTransform: "none",
            marginLeft: "auto",
          }}
          onClick={handleSubmitComment}
        >
          Post
        </Button>
      </form>
    </Box>
  );
};

export default AddCommentForm;
