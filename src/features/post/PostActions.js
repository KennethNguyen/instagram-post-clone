import React from "react";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import CommentOutlinedIcon from "@material-ui/icons/CommentOutlined";
import ShareOutlinedIcon from "@material-ui/icons/ShareOutlined";
import BookmarkBorderOutlinedIcon from "@material-ui/icons/BookmarkBorderOutlined";

/* Actions available for a post itself; like, comment, share, bookmark post */
const PostActions = () => {
  return (
    <CardActions disableSpacing>
      <IconButton aria-label="like post">
        <FavoriteBorderIcon fontSize="large" />
      </IconButton>
      <IconButton aria-label="comment on post">
        <CommentOutlinedIcon fontSize="large" />
      </IconButton>
      <IconButton aria-label="share post">
        <ShareOutlinedIcon fontSize="large" />
      </IconButton>
      <IconButton aria-label="bookmark post" style={{ marginLeft: "auto" }}>
        <BookmarkBorderOutlinedIcon fontSize="large" />
      </IconButton>
    </CardActions>
  );
};

export default PostActions;
