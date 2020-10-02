import React from "react";
import "./index.css";

const ShowSkills = ({ skills }) => {
  return (
    <div className="user-skills">
      {skills.map((skill, index) => (
        <h5 key={index}> {skill} ♦ </h5>
      ))}
    </div>
  );
};

export default ShowSkills;
