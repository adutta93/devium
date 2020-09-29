import React, { Fragment, useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import {
  createProfile,
  getUserProfile,
} from "../../Redux/actions/profile.action";
import Button from "../Button";
import { AiOutlineUser } from "react-icons/ai";
import Swal from "sweetalert2";
import {
  FaFacebook,
  FaLinkedinIn,
  FaStackOverflow,
  FaTwitter,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";
import "./index.css";

const initialState = {
  company: "",
  website: "",
  location: "",
  status: "",
  skills: "",
  githubusername: "",
  bio: "",
  twitter: "",
  facebook: "",
  linkedin: "",
  youtube: "",
  instagram: "",
  stackOverflow: "",
};

const EditProfile = ({
  profile: { profile, loading },
  createProfile,
  getUserProfile,
  history,
}) => {
  const [formData, setFormData] = useState(initialState);
  const [displaySocialInputs, toggleSocialInputs] = useState(false);

  useEffect(() => {
    getUserProfile();

    setFormData({
      company: loading || !profile.company ? "" : profile.company,
      website: loading || !profile.website ? "" : profile.website,
      location: loading || !profile.location ? "" : profile.location,
      status: loading || !profile.status ? "" : profile.status,
      skills: loading || !profile.skills ? "" : profile.skills.join(","),
      githubusername:
        loading || !profile.githubusername ? "" : profile.githubusername,
      bio: loading || !profile.bio ? "" : profile.bio,
      twitter: loading || !profile.twitter ? "" : profile.twitter,
      facebook: loading || !profile.facebook ? "" : profile.facebook,
      linkedin: loading || !profile.linkedin ? "" : profile.linkedin,
      youtube: loading || !profile.youtube ? "" : profile.youtube,
      instagram: loading || !profile.instagram ? "" : profile.instagram,
      stackOverflow:
        loading || !profile.stackOverflow ? "" : profile.stackOverflow,
    });
  }, [loading]);

  const {
    company,
    website,
    location,
    status,
    skills,
    githubusername,
    bio,
    twitter,
    facebook,
    linkedin,
    youtube,
    instagram,
    stackOverflow,
  } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    createProfile(formData, history, true);
    Swal.fire({
      title: "Success",
      text: "Done",
      icon: "success",
      position: "center",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <Fragment>
      <h1 className="edit-large-text ">Edit Your Profile</h1>
      <p className="edit-lead-text">
        {" "}
        <AiOutlineUser
          size={30}
          color="#03a87c"
          style={{
            marginBottom: "-5px",
          }}
        />{" "}
        Add some changes to your profile
      </p>
      <small className="edit-instruction">* = required field</small>
      <form className="edit-form" onSubmit={onSubmit}>
        <div className="edit-form-group">
          <select name="status" value={status} onChange={onChange}>
            <option>* Select Professional Status</option>
            <option value="Software Developer">Software Developer</option>
            <option value="SDE I">SDE I</option>
            <option value="SDE II">SDE II</option>
            <option value="SDE III">SDE III</option>
            <option value="Software Engineer">Software Engineer</option>
            <option value="Manager">Manager</option>
            <option value="Student">Student</option>
            <option value="Instructor">Instructor</option>
            <option value="Intern">Intern</option>
            <option value="Other">Other</option>
          </select>
          <small className="edit-form-text">
            Give us an idea of where you are at in your career
          </small>
        </div>
        <div className="edit-form-group">
          <input
            type="text"
            placeholder="Company"
            name="company"
            value={company}
            onChange={onChange}
          />
          <small className="edit-form-text">
            Could be your own company or one you work for
          </small>
        </div>
        <div className="edit-form-group">
          <input
            type="text"
            placeholder="Website"
            name="website"
            value={website}
            onChange={onChange}
          />
          <small className="edit-form-text">
            Could be your own or a company website
          </small>
        </div>
        <div className="edit-form-group">
          <input
            type="text"
            placeholder="Location"
            name="location"
            value={location}
            onChange={onChange}
          />
          <small className="edit-form-text">
            City & state suggested (eg. Boston, MA)
          </small>
        </div>
        <div className="edit-form-group">
          <input
            type="text"
            placeholder="* Skills"
            name="skills"
            value={skills}
            onChange={onChange}
          />
          <small className="edit-form-text">
            Please use comma separated values (eg. React, Node, Graphql etc)
          </small>
        </div>
        <div className="edit-form-group">
          <input
            type="text"
            placeholder="Github Username"
            name="githubusername"
            value={githubusername}
            onChange={onChange}
          />
          <small className="edit-form-text">
            If you want your latest repos and a Github link, include your
            username
          </small>
        </div>
        <div className="edit-form-group">
          <textarea
            placeholder="A short bio of yourself"
            name="bio"
            value={bio}
            onChange={onChange}
          />
          <small className="edit-form-text">
            Tell us a little about yourself
          </small>
        </div>

        <div className="edit-social-btn">
          <Button
            onClick={() => toggleSocialInputs(!displaySocialInputs)}
            value="Add social links"
            type="button"
          />
          <span>Optional</span>
        </div>

        {displaySocialInputs && (
          <Fragment>
            <div className="edit-form-group edit-social-input">
              <FaTwitter
                size={30}
                color="#00acee"
                style={{
                  marginTop: "5px",
                  marginRight: "-10rem",
                  marginLeft: "11rem",
                }}
              />
              <input
                type="text"
                placeholder="Twitter URL"
                name="twitter"
                value={twitter}
                onChange={onChange}
                className="edit-social-input"
              />
            </div>

            <div className="edit-form-group edit-social-input">
              <FaFacebook
                size={30}
                color="#4267B2"
                style={{
                  marginTop: "5px",
                  marginRight: "-10rem",
                  marginLeft: "11rem",
                }}
              />
              <input
                type="text"
                placeholder="Facebook URL"
                name="facebook"
                value={facebook}
                onChange={onChange}
              />
            </div>

            <div className="edit-form-group edit-social-input">
              <FaYoutube
                size={30}
                color="red"
                style={{
                  marginTop: "5px",
                  marginRight: "-10rem",
                  marginLeft: "11rem",
                }}
              />
              <input
                type="text"
                placeholder="YouTube URL"
                name="youtube"
                value={youtube}
                onChange={onChange}
              />
            </div>

            <div className="edit-form-group edit-social-input">
              <FaLinkedinIn
                size={30}
                color="#0e76a8"
                style={{
                  marginTop: "5px",
                  marginRight: "-10rem",
                  marginLeft: "11rem",
                }}
              />
              <input
                type="text"
                placeholder="Linkedin URL"
                name="linkedin"
                value={linkedin}
                onChange={onChange}
              />
            </div>

            <div className="edit-form-group edit-social-input">
              <FaInstagram
                size={30}
                color="#dd2a7b"
                style={{
                  marginTop: "5px",
                  marginRight: "-10rem",
                  marginLeft: "11rem",
                }}
              />
              <input
                type="text"
                placeholder="Instagram URL"
                name="instagram"
                value={instagram}
                onChange={onChange}
              />
            </div>

            <div className="edit-form-group edit-social-input">
              <FaStackOverflow
                size={30}
                color="#f48024"
                style={{
                  marginTop: "5px",
                  marginRight: "-10rem",
                  marginLeft: "11rem",
                }}
              />
              <input
                type="text"
                placeholder="Stackoverflow URL"
                name="stackOverflow"
                value={stackOverflow}
                onChange={onChange}
              />
            </div>
          </Fragment>
        )}

        <div className="edit-submit-grp">
          <Button type="submit" value="Submit" />
          <Link to="/manageprofile">
            <Button className="edit-go-back" transparent value="Go Back" />
          </Link>
        </div>
      </form>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  profile: state.profile,
});

export default connect(mapStateToProps, { createProfile, getUserProfile })(
  withRouter(EditProfile)
);
