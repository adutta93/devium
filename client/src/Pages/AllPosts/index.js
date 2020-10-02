import React, { Fragment, useEffect } from "react";
import "./index.css";
import Loader from "../../Components/Loader";
import { connect } from "react-redux";
import PostItem from "../../Components/PostComponents/PostItem";
// import PostForm from './PostForm';
import { getPosts } from "../../Redux/actions/post.action";

const Posts = ({ getPosts, posts, loading }) => {
  useEffect(() => {
    getPosts();
  }, [getPosts]);
  console.log("All posts", posts.posts);
  return loading ? (
    <Loader />
  ) : (
    <Fragment>
      <h1 className="large text-primary">Posts</h1>
      <p className="lead">Welcome to the community</p>
      {/* <PostForm />*/}
      <div className="posts">
        {posts.posts.map((post) => (
          <PostItem key={post._id} post={post} />
        ))}
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  posts: state.post.posts,
  loading: state.post.loading,
});

export default connect(mapStateToProps, { getPosts })(Posts);
