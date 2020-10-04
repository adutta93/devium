import React, { useState } from "react";
import "./index.css";
// import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { addPost } from "../../../Redux/actions/post.action";

const PostForm = ({ addPost }) => {
  const [text, setText] = useState("");

  return (
    <div className="fr-post-form">
      <div className="bg-primary p"></div>
      <form
        className="fr-form"
        onSubmit={(e) => {
          e.preventDefault();
          addPost({ text });
          setText("");
        }}
      >
        <textarea
          name="text"
          cols="50"
          rows="5"
          placeholder="Create a post"
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
        />
        <input type="submit" value="Post" className="fr-btn" />
      </form>
    </div>
  );
};

export default connect(null, { addPost })(PostForm);
