import React, { Fragment } from "react";
import Moment from "react-moment";
import Button from "../Button";

const ShowEducation = ({ experience }) => {
  const experiences = experience.map((exp) => (
    <td key={exp._id}>
      <td>{exp.company}</td>
      <td>{exp.title}</td>
      <td>
        {<Moment format="DD/MM/YYYY">{exp.from}</Moment>} -{" "}
        {exp.to === null ? (
          "Now"
        ) : (
          <Moment format="DD/MM/YYYY">{exp.to}</Moment>
        )}
      </td>
      <td>
        <Button value="Delete" />
      </td>
    </td>
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

export default ShowEducation;
