import React, { Fragment } from "react";
import { AiFillDelete } from "react-icons/ai";
import Moment from "react-moment";
import moment from "moment";
import "./index.css";

import { connect } from "react-redux";
import { deleteExperience } from "../../Redux/actions/profile.action";

const ShowExperience = ({ experience, deleteExperience }) => {
  const experiences = experience.map((exp) => (
    <div className="main-exp" key={exp._id}>
      <div className="main-exp-details">
        <p>{exp.company}</p>
        <p className="showExp-hide-sm">{exp.title}</p>
        <p>
          <Moment format="DD/MM/YYYY">{moment.utc(exp.from)}</Moment> -{" "}
          {exp.to === null ? (
            "Now"
          ) : (
            <Moment format="DD/MM/YYYY">{moment.utc(exp.to)}</Moment>
          )}
        </p>
      </div>
      <div>
        <AiFillDelete
          className="showExp-btn showExp-hide-sm"
          onClick={() => deleteExperience(exp._id)}
        />
      </div>
    </div>
  ));
  return (
    <Fragment>
      <div className="showExp-table-grp">
        <h2 className="showExp-my-2">Experience</h2>
        <div className="showExp-table">
          <div>{experiences}</div>
        </div>
      </div>
    </Fragment>
  );
};

export default connect(null, { deleteExperience })(ShowExperience);
