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
        <p>
          {status}
          {company && <span> at {company.slice(0, 5)}...</span>}
        </p>
      </div>
      <span>
        {/*{skills.slice(0, 6).map((skill, index) => (
          <span key={index}>{skill} || </span>
       ))}*/}
      </span>

      <div className="p-btn">
        <Link to={`/profile/${_id}`}>
          <Button className="p-btn-s" value="Profile" />
        </Link>
      </div>
    </div>
  );
};

export default ProgileItem;
