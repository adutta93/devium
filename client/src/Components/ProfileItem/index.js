import React from "react";
import { Link } from "react-router-dom";
import Button from "../../Components/Button";
import "./index.css";

const ProgileItem = ({
  profile: {
    user: { _id, name, avatar },
    status,
    company,
    location,
    skills,
  },
}) => {
  return (
    <div className="p-profile">
      <img src={avatar} className="p-round-img" />
      <div className="p-details">
        <h2>{name}</h2>
        <p className="p-my-1">
          {status}
          {company && <span> at {company}</span>}
        </p>
        <p className="p-my-1">{location && <span>{location}</span>}</p>
      </div>

      <div className="p-btn">
        <Link to={`/profile/${_id}`}>
          <Button className="p-btn-s" value="Profile" />
        </Link>
      </div>
    </div>
  );
};

export default ProgileItem;
