import React, { Fragment } from "react";
import Moment from "react-moment";
import moment from "moment";
import Button from "../Button";

const ShowEducation = ({ education }) => {
  console.log("From ShowEducation ==> ", education);
  const educations = education.map((edu) => (
    <tr key={edu._id}>
      <td>{edu.school}</td>
      <td>{edu.degree}</td>
      <td>
        <Moment format="DD/MM/YYYY">{moment.utc(edu.from)}</Moment> -{" "}
        {edu.to === null ? (
          "Now"
        ) : (
          <Moment format="DD/MM/YYYY">{moment.utc(edu.to)}</Moment>
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
            <th>School</th>
            <th>Degree</th>
            <th>Duration</th>
            <th />
          </tr>
        </thead>
        <tbody>{educations}</tbody>
      </table>
    </Fragment>
  );
};

export default ShowEducation;
