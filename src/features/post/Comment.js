import React from "react";
import { useDispatch } from "react-redux";
import { toggleCommentLike } from "./postSlice";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";

/* A Comment component */
/* Only show the avatar and subheaders (time elapseds since commented, likes, and reply button) on landscape view */
const Comment = ({ comment, isLandscape }) => {
  const { postedBy, message, liked, id, profilePicture, replies } = comment;
  const dispatch = useDispatch();
  return (
    <ListItem>
      {isLandscape && (
        <ListItemAvatar>
          <Avatar
            alt={postedBy}
            src={require(`../../images/avatar/${profilePicture}.jpg`).default}
          />
        </ListItemAvatar>
      )}
      <ListItemText
        primary={
          <Box width={300} display="flex">
            <Typography style={{ fontWeight: 600 }}>
              {postedBy} &nbsp;
            </Typography>
            <Typography style={{ minWidth: 0, overflowWrap: "break-word" }}>
              {message}
            </Typography>
          </Box>
        }
        secondary={
          isLandscape && (
            <Box width={300} display="flex" flexDirection="column">
              <Box width={300} display="flex" style={{ gap: 12 }}>
                <Typography>11h</Typography>
                {liked && (
                  <Typography style={{ color: "grey" }}>1 like</Typography>
                )}
                <Button
                  disableRipple
                  style={{
                    color: "grey",
                    textTransform: "none",
                    backgroundColor: "transparent",
                    padding: "1px 0 0 0",
                    minWidth: 0,
                  }}
                >
                  Reply
                </Button>
              </Box>
              {replies.length > 0 && (
                <Box width={300} display="flex">
                  <div
                    style={{
                      color: "grey",
                      margin: "2px 10px 0px 10px",
                    }}
                  >
                    ―
                  </div>
                  <Typography style={{ color: "grey" }}>
                    View replies ({replies.length})
                  </Typography>
                </Box>
              )}
            </Box>
          )
        }
      />
      <ListItemSecondaryAction>
        <IconButton
          aria-label={liked ? "unlike comment" : "like comment"}
          onClick={() =>
            dispatch(toggleCommentLike({ commentId: id, postId: 0 }))
          }
        >
          {liked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default Comment;
