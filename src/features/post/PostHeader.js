import React from "react";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
// import Person1 from "../../images/avatar/1.jpg"

const PostHeader = ({ postCreator }) => {
  const { username, location, profilePicture } = postCreator;

  return (
    <CardHeader
      avatar={
        <Avatar
          alt={username}
          src={require(`../../images/avatar/${profilePicture}.jpg`).default}
        />
      }
      action={
        <IconButton aria-label="settings">
          <MoreHorizIcon />
        </IconButton>
      }
      title={username}
      subheader={location}
    />
  );
};

export default PostHeader;
