import React from "react";
import { useSelector } from "react-redux";
import moment from "moment";
import PostHeader from "./PostHeader";
import PostMedia from "./PostMedia";
import PostActions from "./PostActions";
import CommentSection from "./CommentSection";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import AddCommentForm from "./AddCommentForm";

/* Portrait version of Instagram post (mobile view) */
const PostPortrait = ({ postId }) => {
  // fetch the specified post from the postId props passed in
  const post = useSelector((state) => state.post.posts[postId]);
  const { creator, comments, media, likes, createdAt } = post;

  return (
    <Card>
      <PostHeader postCreator={creator} />
      <Divider />
      <PostMedia postMedia={media} />
      <PostActions />
      <Typography style={{ fontWeight: 600, marginLeft: "1rem" }}>
        {likes} likes
      </Typography>
      <CommentSection comments={comments} />
      <Typography
        style={{ color: "grey", marginLeft: "1rem", paddingBottom: "1rem" }}
      >
        {moment(createdAt).fromNow()}
      </Typography>
      <Divider />
      <AddCommentForm />
    </Card>
  );
};

export default PostPortrait;
