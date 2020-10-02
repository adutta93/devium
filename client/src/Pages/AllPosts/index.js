import React, { Fragment, useEffect } from "react";
import Loader from "../../Components/Loader";
import { connect } from "react-redux";
// import PostItem from './PostItem';
// import PostForm from './PostForm';
import { getPosts } from "../../Redux/actions/post.action";

const Posts = ({ getPosts, post: { posts, loading } }) => {
  useEffect(() => {
    getPosts();
  }, [getPosts]);

  return (
    <Fragment>
      <h1 className="large text-primary">Posts</h1>
      <p className="lead">
        <i className="fas fa-user" /> Welcome to the community
      </p>
      <PostForm />
      <div className="posts">
        {posts.map((post) => (
          <PostItem key={post._id} post={post} />
        ))}
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  post: state.post,
});

export default connect(mapStateToProps, { getPosts })(Posts);
