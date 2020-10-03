import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Loader from "../../Components/Loader";
import PostItem from "../../Components/PostComponents/PostItem";
// import CommentForm from '../post/CommentForm';
// import CommentItem from '../post/CommentItem';
import { getPost } from "../../Redux/actions/post.action";

const Post = ({ getPost, post: { post, loading }, match }) => {
  useEffect(() => {
    getPost(match.params.id);
  }, [getPost, match.params.id]);

  return loading || post === null ? (
    <Loader />
  ) : (
    <Fragment>
      <Link to="/posts" className="btn">
        Back To Posts
      </Link>
      <PostItem post={post} showActions={false} />
      {/*
             <CommentForm postId={post._id} />
      <div className="comments">
        {post.comments.map((comment) => (
          <CommentItem key={comment._id} comment={comment} postId={post._id} />
        ))}
      </div>
        */}
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  post: state.post,
});

export default connect(mapStateToProps, { getPost })(Post);
