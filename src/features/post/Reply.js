import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleReplyLike, toggleReply } from "./postSlice";
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

/* A Reply component */
const Reply = ({ reply, isLandscape }) => {
  const { postedBy, message, liked, id, profilePicture, replies, repliedTo } = reply;
  const dispatch = useDispatch();
  const [toggleReplies, setToggleReplies] = useState(false);

  const handleClickViewReplies = () => {
    setToggleReplies((showReplies) => !showReplies);
  };

  return (
    <ListItem style={{ display: "flex", alignItems: "start" }}>
      {isLandscape && (
        <ListItemAvatar style={{ minWidth: 0 }}>
          <Avatar
            alt={postedBy}
            style={{ width: 30, height: 30 }}
            src={require(`../../images/avatar/${profilePicture}.jpg`).default}
          />
        </ListItemAvatar>
      )}
      <ListItemText
        style={{ marginLeft: "1rem" }}
        primary={
          <Box width={300} display="flex">
            <Typography style={{ fontWeight: 600, fontSize: "0.9rem" }}>
              {postedBy} &nbsp;
            </Typography>
            <Typography
              style={{
                minWidth: 0,
                overflowWrap: "break-word",
                fontSize: "0.9rem",
                width: 100,
              }}
            >
              {message}
            </Typography>
          </Box>
        }
        secondary={
          isLandscape && (
            <Box width={300} display="flex" flexDirection="column">
              <Box width={300} display="flex" style={{ gap: 12 }}>
                <Typography style={{ fontSize: "0.9rem" }}>11h</Typography>
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
                    fontSize: "0.8rem",
                  }}
                  onClick={() =>
                    dispatch(toggleReply({ commentId: id, postId: 0 }))
                  }
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
                  <Button
                    disableRipple
                    style={{
                      color: "grey",
                      textTransform: "none",
                      backgroundColor: "transparent",
                      padding: "1px 0 0 0",
                      minWidth: 0,
                    }}
                    onClick={handleClickViewReplies}
                  >
                    {toggleReplies
                      ? `Hide Replies`
                      : `View replies (${replies.length})`}
                  </Button>
                </Box>
              )}
            </Box>
          )
        }
      />
      <ListItemSecondaryAction
        style={{ position: "absolute", right: 0, top: "2rem" }}
      >
        <IconButton
          size="small"
          aria-label={liked ? "unlike comment" : "like comment"}
          onClick={() =>
            dispatch(toggleReplyLike({ commentId: repliedTo, replyId: id, postId: 0 }))
          }
        >
          {liked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default Reply;
