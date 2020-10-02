import React from "react";
import "./index.css";
const ShowUser = ({ user: { name, avatar } }) => {
  return (
    <div className="user-top">
      <img src={avatar} alt="" className="user-round-img" />
      <h1 className="user-name">{name}</h1>
    </div>
  );
};

export default ShowUser;
