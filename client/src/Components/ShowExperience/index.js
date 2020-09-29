import React, { Fragment } from "react";
import Moment from "react-moment";
import moment from "moment";
import Button from "../Button";
import "./index.css";

const ShowExperience = ({ experience }) => {
  console.log(experience);
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

export default ShowExperience;
