import React, { Fragment, useState } from "react";
import "./index.css";
import { AiOutlineUser } from "react-icons/ai";
import Swal from "sweetalert2";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { addEducation } from "../../Redux/actions/profile.action";
import Button from "../Button";

const AddEducation = ({ addEducation, history }) => {
  const [formData, setFormData] = useState({
    school: "",
    degree: "",
    fieldofstudy: "",
    from: "",
    to: "",
    current: false,
    description: "",
  });

  const [toDateDisabled, toggleDateDisabled] = useState(false);
  const {
    school,
    degree,
    fieldofstudy,
    from,
    to,
    current,
    description,
  } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  return (
    <Fragment>
      <h1 className="edu-large-text">Add an education</h1>
      <p className="edu-lead-text">
        <AiOutlineUser
          size={30}
          color="#03a87c"
          style={{
            marginBottom: "-5px",
          }}
        />{" "}
        Add any past/present education you earned
      </p>
      <small className="edu-instruction">* = required field</small>
      <form
        className="edu-form"
        onSubmit={(e) => {
          e.preventDefault();
          addEducation(formData, history);
          Swal.fire({
            title: "Success",
            text: "Done",
            icon: "success",
            position: "center",
            showConfirmButton: false,
            timer: 1500,
          });
        }}
      >
        <div className="edu-form-group">
          <input
            type="text"
            placeholder="* Degree / Diploma"
            name="degree"
            value={degree}
            onChange={onChange}
            required
          />
        </div>
        <div className="edu-form-group">
          <input
            type="text"
            placeholder="* School / Bootcamp"
            name="school"
            value={school}
            onChange={onChange}
            required
          />
        </div>
        <div className="edu-form-group">
          <input
            type="text"
            placeholder="Field of study"
            name="fieldofstudy"
            value={fieldofstudy}
            onChange={onChange}
          />
        </div>
        <div className="edu-form-group">
          <h4 className="edu-h4">From Date</h4>
          <input type="date" name="from" value={from} onChange={onChange} />
        </div>
        <div className="edu-form-group">
          <p className="edu-current-check">
            <input
              type="checkbox"
              name="current"
              checked={current}
              value={current}
              onChange={() => {
                setFormData({ ...formData, current: !current });
                toggleDateDisabled(!toDateDisabled);
              }}
            />{" "}
            Current Job
          </p>
        </div>
        <div className="edu-form-group">
          <h4 className="edu-h4">To Date</h4>
          <input
            type="date"
            name="to"
            value={to}
            onChange={onChange}
            disabled={current}
          />
        </div>
        <div className="edu-form-group">
          <textarea
            name="description"
            cols="30"
            rows="5"
            placeholder="Description"
            value={description}
            onChange={onChange}
          />
        </div>
        <div className="edu-submit-grp">
          <Button value="Submit" />
          <Link className="edu-go-back" to="/manageprofile">
            <Button value="Go Back" transparent />
          </Link>
        </div>
      </form>
    </Fragment>
  );
};

export default connect(null, { addEducation })(withRouter(AddEducation));
