import React, { Fragment, useState } from "react";
import "./index.css";
import { AiOutlineUser } from "react-icons/ai";
import Swal from "sweetalert2";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { addExperience } from "../../Redux/actions/profile.action";
import Button from "../Button";

const AddExperience = ({ addExperience, history }) => {
  const [formData, setFormData] = useState({
    company: "",
    title: "",
    location: "",
    from: "",
    to: "",
    current: false,
    description: "",
  });

  const [toDateDisabled, toggleDateDisabled] = useState(false);
  const { company, title, location, from, to, current, description } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  return (
    <Fragment>
      <h1 className="exp-large-text">Add An Experience</h1>
      <p className="exp-lead-text">
        <AiOutlineUser
          size={30}
          color="#03a87c"
          style={{
            marginBottom: "-5px",
          }}
        />{" "}
        Add any past/present developer/programming position(s)
      </p>
      <small className="exp-instruction">* = required field</small>
      <form
        className="exp-form"
        onSubmit={(e) => {
          e.preventDefault();
          addExperience(formData, history);
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
        <div className="exp-form-group">
          <input
            type="text"
            placeholder="* Job Title"
            name="title"
            value={title}
            onChange={onChange}
            required
          />
        </div>
        <div className="exp-form-group">
          <input
            type="text"
            placeholder="* Company"
            name="company"
            value={company}
            onChange={onChange}
            required
          />
        </div>
        <div className="exp-form-group">
          <input
            type="text"
            placeholder="Location"
            name="location"
            value={location}
            onChange={onChange}
          />
        </div>
        <div className="exp-form-group">
          <h4>From Date</h4>
          <input type="date" name="from" value={from} onChange={onChange} />
        </div>
        <div className="exp-form-group">
          <p className="current-check">
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
        <div className="exp-form-group">
          <h4>To Date</h4>
          <input
            type="date"
            name="to"
            value={to}
            onChange={onChange}
            disabled={current}
          />
        </div>
        <div className="exp-form-group">
          <textarea
            name="description"
            cols="30"
            rows="5"
            placeholder="Job Description"
            value={description}
            onChange={onChange}
          />
        </div>
        <div className="exp-submit-grp">
          <Button value="Submit" />
          <Link className="exp-go-back" to="/manageprofile">
            <Button value="Go Back" transparent />
          </Link>
        </div>
      </form>
    </Fragment>
  );
};

export default connect(null, { addExperience })(withRouter(AddExperience));
