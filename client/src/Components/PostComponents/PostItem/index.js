import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import { connect } from "react-redux";
import "./index.css";
import { AiFillCaretUp, AiFillCaretDown, AiFillDelete } from "react-icons/ai";
import {
  addLike,
  removeLike,
  deletePost,
} from "../../../Redux/actions/post.action";

const PostItem = ({
  auth,
  post: { _id, text, name, avatar, user, likes, comments, date },
  addLike,
  removeLike,
  deletePost,
  showActions,
}) => {
  return (
    <div className="pt-post">
      <div>
        <Link to={`/userprofile/${user}`}>
          <div className="pt-user-grp">
            <img className="pt-round-img" src={avatar} alt="" />
            <h4>{name}</h4>
          </div>
        </Link>
      </div>
      <div>
        <p className="pt-text">{text}</p>
        <p className="pt-post-date">
          Posted on <Moment format="DD/MM/YYYY">{date}</Moment>
        </p>

        {showActions && (
          <Fragment>
            <div className="pt-comment-section">
              <div className="pt-element">
                <AiFillCaretUp color={"green"} onClick={() => addLike(_id)} />{" "}
                <span>{likes.length > 0 && <span>{likes.length}</span>}</span>
              </div>
              <div className="pt-element">
                <AiFillCaretDown onClick={() => removeLike(_id)} />
              </div>

              <div className="pt-element">
                {!auth.loading && user === auth.user._id && (
                  <AiFillDelete onClick={() => deletePost(_id)} color={"red"} />
                )}
              </div>
            </div>
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

export default connect(mapStateToProps, { addLike, removeLike, deletePost })(
  PostItem
);
