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
      <td>{exp.title}</td>
      <td>
        <Moment format="DD/MM/YYYY">{moment.utc(exp.from)}</Moment> -{" "}
        {exp.to === null ? (
          "Now"
        ) : (
          <Moment format="DD/MM/YYYY">{moment.utc(exp.to)}</Moment>
        )}
      </td>
      <td>
        <Button value="Delete" />
      </td>
    </tr>
  ));
  return (
    <Fragment>
      <h2>Experience</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Company</th>
            <th>Tittle</th>
            <th>Duration</th>
            <th />
          </tr>
        </thead>
        <tbody>{experiences}</tbody>
      </table>
    </Fragment>
  );
};

export default ShowExperience;
