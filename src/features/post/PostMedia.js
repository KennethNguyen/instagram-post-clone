import React from "react";
import CardMedia from "@material-ui/core/CardMedia";

/* The media content for a post; picture or video, but picture in this case */
const PostMedia = ({ postMedia }) => {
  return (
    <CardMedia
      style={{ height: 300, width: 345 }}
      component="img"
      image={require(`../../images/media/${postMedia}.jpg`).default}
      title={postMedia}
    />
  );
};

export default PostMedia;
