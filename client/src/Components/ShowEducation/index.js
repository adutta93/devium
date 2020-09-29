import React, { Fragment } from "react";
import Moment from "react-moment";
import moment from "moment";
import Button from "../Button";
import "./index.css";

import { connect } from "react-redux";
import { deleteEducation } from "../../Redux/actions/profile.action";

const ShowEducation = ({ education, deleteEducation }) => {
  console.log("From ShowEducation ==> ", education);
  const educations = education.map((edu) => (
    <tr key={edu._id}>
      <td>{edu.school}</td>
      <td className="showEdu-hide-sm">{edu.degree}</td>
      <td>
        <Moment format="DD/MM/YYYY">{moment.utc(edu.from)}</Moment> -{" "}
        {edu.to === null ? (
          "Now"
        ) : (
          <Moment format="DD/MM/YYYY">{moment.utc(edu.to)}</Moment>
        )}
      </td>
      <td>
        <Button
          className="showEdu-btn showEdu-hide-sm"
          value="Delete"
          deleteBtn
          onClick={() => deleteEducation(edu._id)}
        />
      </td>
    </tr>
  ));
  return (
    <Fragment>
      <div className="showEdu-table-grp">
        <h2 className="showEdu-my-2">Education</h2>
        <table className="showEdu-table">
          <thead>
            <tr>
              <th>School</th>
              <th className="showEdu-hide-sm">Degree</th>
              <th className="showEdu-hide-sm">Duration</th>
              <th />
            </tr>
          </thead>
          <tbody>{educations}</tbody>
        </table>
      </div>
    </Fragment>
  );
};

export default connect(null, { deleteEducation })(ShowEducation);
