import React from "react";
import { useDispatch } from "react-redux";
import { toggleCommentLike } from "./postSlice";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";

/* A Comment component */
const Comment = ({ comment }) => {
  const dispatch = useDispatch();
  return (
    <Box
      marginLeft="auto"
      marginRight="auto"
      width="100%"
      display="flex"
      alignItems="center"
    >
      <Box width={300} display="flex" flexGrow={1}>
        <Typography style={{ fontWeight: 600 }}>
          {comment.postedBy} &nbsp;
        </Typography>
        <Typography style={{ minWidth: 0, overflowWrap: "break-word" }}>{comment.message}</Typography>
      </Box>
      <IconButton
        aria-label={comment.liked ? "unlike comment" : "like comment"}
        onClick={() =>
          dispatch(toggleCommentLike({ commentId: comment.id, postId: 0 }))
        }
      >
        {comment.liked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
      </IconButton>
    </Box>
  );
};

export default Comment;
