import React, { Fragment } from "react";
import Moment from "react-moment";
import moment from "moment";
import "./index.css";
import { useHistory } from "react-router-dom";
import { AiFillDelete } from "react-icons/ai";
import { connect } from "react-redux";
import { deleteEducation } from "../../Redux/actions/profile.action";

const ShowEducation = ({ education, deleteEducation }) => {
  const history = useHistory();
  const educations = education.map((edu) => (
    <div className="main-edu" key={edu._id}>
      <div className="main-edu-details">
        <p>{edu.school}</p>
        <p className="showEdu-hide-sm">{edu.degree}</p>
        <p>
          <Moment format="DD/MM/YYYY">{moment.utc(edu.from)}</Moment> -{" "}
          {edu.to === null ? (
            "Now"
          ) : (
            <Moment format="DD/MM/YYYY">{moment.utc(edu.to)}</Moment>
          )}
        </p>
      </div>
      <div>
        <AiFillDelete
          className="showEdu-btn showEdu-hide-sm"
          onClick={() => (deleteEducation(edu._id) ? history.go(0) : null)}
        />
      </div>
    </div>
  ));
  return (
    <Fragment>
      <div className="showEdu-table-grp">
        <h2 className="showEdu-my-2">Education</h2>
        <div className="showEdu-table">
          <div>{educations}</div>
        </div>
      </div>
    </Fragment>
  );
};

export default connect(null, { deleteEducation })(ShowEducation);
