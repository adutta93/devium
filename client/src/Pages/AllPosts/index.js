import React, { Fragment, useEffect } from "react";
import "./index.css";
import Loader from "../../Components/Loader";
import { connect } from "react-redux";
import PostItem from "../../Components/PostComponents/PostItem";
import PostForm from "../../Components/PostComponents/PostForm/";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import { getPosts } from "../../Redux/actions/post.action";

const Posts = ({ getPosts, posts, loading }) => {
  useEffect(() => {
    getPosts();
  }, [getPosts]);

  return loading ? (
    <Loader />
  ) : (
    <Fragment>
      <Header />
      <h1 className="all-large">Posts</h1>
      <p className="all-lead">Welcome to the community</p>
      <PostForm />
      <div className="posts">
        {posts.posts.map((post) => (
          <PostItem key={post._id} post={post} />
        ))}
      </div>
      <Footer />
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  posts: state.post.posts,
  loading: state.post.loading,
});

export default connect(mapStateToProps, { getPosts })(Posts);
