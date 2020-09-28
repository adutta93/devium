import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button";
import "./index.css";

const ProfileActions = () => {
  return (
    <div className="actions">
      <Link to="/edit-profile">
        <Button className="action-btn" value="Edit profile" />
      </Link>

      <Link to="/add-experirnce">
        <Button className="action-btn" value="Add Experience" />
      </Link>

      <Link to="/add-education">
        <Button className="action-btn" value="Add Education" />
      </Link>
    </div>
  );
};

export default ProfileActions;
