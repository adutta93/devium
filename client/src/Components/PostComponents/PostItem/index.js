import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import { connect } from "react-redux";
import "./index.css";
import { AiOutlineCheck, AiOutlineClose, AiFillDelete } from "react-icons/ai";
import { addLike, removeLike } from "../../../Redux/actions/post.action";

const PostItem = ({
  auth,
  post: { _id, text, name, avatar, user, likes, comments, date },
  addLike,
  removeLike,
  showActions,
}) => {
  return (
    <div className="post bg-white p-1 my-1">
      <div>
        <Link to={`/profile/${user}`}>
          <img className="round-img" src={avatar} alt="" />
          <h4>{name}</h4>
        </Link>
      </div>
      <div>
        <p className="my-1">{text}</p>
        <p className="post-date">
          Posted on <Moment format="DD/MM/YYYY">{date}</Moment>
        </p>

        {showActions && (
          <Fragment>
            <AiOutlineCheck color={"green"} onClick={() => addLike(_id)} />{" "}
            <span>{likes.length > 0 && <span>{likes.length}</span>}</span>
            <AiOutlineClose onClick={() => removeLike(_id)} />
            <Link to={`/posts/${_id}`} className="btn btn-primary">
              Comments{" "}
              {comments.length > 0 && (
                <span className="comment-count">{comments.length}</span>
              )}
            </Link>
            {!auth.loading && user !== auth.user._id && (
              <AiFillDelete //   onClick={() => deletePost(_id)}
                color={"red"}
              />
            )}
          </Fragment>
        )}
      </div>
    </div>
  );
};

PostItem.defaultProps = {
  showActions: true,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { addLike, removeLike })(PostItem);
