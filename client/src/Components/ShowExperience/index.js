import React, { Fragment } from "react";
import Moment from "react-moment";
import moment from "moment";
import Button from "../Button";
import "./index.css";

import { connect } from "react-redux";
import { deleteExperience } from "../../Redux/actions/profile.action";

const ShowExperience = ({ experience, deleteExperience }) => {
  const experiences = experience.map((exp) => (
    <tr key={exp._id}>
      <td>{exp.company}</td>
      <td className="showExp-hide-sm">{exp.title}</td>
      <td>
        <Moment format="DD/MM/YYYY">{moment.utc(exp.from)}</Moment> -{" "}
        {exp.to === null ? (
          "Now"
        ) : (
          <Moment format="DD/MM/YYYY">{moment.utc(exp.to)}</Moment>
        )}
      </td>
      <td>
        <Button
          className="showExp-btn showExp-hide-sm"
          value="Delete"
          deleteBtn
          onClick={() => deleteExperience(exp._id)}
        />
      </td>
    </tr>
  ));
  return (
    <Fragment>
      <div className="showExp-table-grp">
        <h2 className="showExp-my-2">Experience</h2>
        <table className="showExp-table">
          <thead>
            <tr>
              <th>Company</th>
              <th className="showExp-hide-sm">Tittle</th>
              <th className="showExp-hide-sm">Duration</th>
              <th />
            </tr>
          </thead>
          <tbody>{experiences}</tbody>
        </table>
      </div>
    </Fragment>
  );
};

export default connect(null, { deleteExperience })(ShowExperience);
