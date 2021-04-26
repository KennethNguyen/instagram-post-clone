import React, { useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import moment from "moment";
import PostHeader from "./PostHeader";
import PostMedia from "./PostMedia";
import PostActions from "./PostActions";
import CommentList from "./CommentList";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import AddCommentForm from "./AddCommentForm";

/* Landscape version of Instagram post (web view) */
const PostLandscape = ({ postId }) => {
  // fetch the specified post from the postId props passed in
  const post = useSelector((state) => state.post.posts[postId]);
  const [cardHeight, setCardHeight] = useState(0); // keep track of card height to dynamicly change image height
  const cardRef = useRef(null); // reference the card height each time the component re-renders

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    setCardHeight(cardRef.current.clientHeight);
  });

  const { creator, comments, media, likes, createdAt } = post;

  return (
    /* added margin for this landscape card because of Post components direct placement */
    <Card
      ref={cardRef}
      style={{ display: "flex", marginTop: "1rem", marginBottom: "1rem" }}
    >
      <PostMedia
        postMedia={media}
        height={cardHeight || 445}
        width={600}
        style={{ flex: "1 0 auto" }}
      />
      <div style={{ display: "flex", flexDirection: "column", width: 450 }}>
        <PostHeader postCreator={creator} />
        <Divider />
        <CommentList comments={comments} isLandscape={true} />
        <Divider />
        <PostActions />
        <Typography style={{ fontWeight: 600, marginLeft: "1rem" }}>
          {likes} likes
        </Typography>
        <Typography
          style={{ color: "grey", marginLeft: "1rem", paddingBottom: "1rem" }}
        >
          {moment(createdAt).fromNow()}
        </Typography>
        <Divider />
        <AddCommentForm />
      </div>
    </Card>
  );
};

export default PostLandscape;
