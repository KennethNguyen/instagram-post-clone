import React from "react";
import CardMedia from "@material-ui/core/CardMedia";

/* The media content for a post; picture or video, but picture in this case */
const PostMedia = ({ postMedia, height, width }) => {
  return (
    <CardMedia
      style={{ height, width }}
      component="img"
      image={require(`../../images/media/${postMedia}.jpg`).default}
      title={postMedia}
    />
  );
};

export default PostMedia;
