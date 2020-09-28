import React, { useEffect, Fragment } from "react";
import "./index.css";
import { Link } from "react-router-dom";
import { getUserProfile } from "../../Redux/actions/profile.action";
import { connect } from "react-redux";
import { AiOutlineUser } from "react-icons/ai";

import Header from "../../Components/Header";
import Loader from "../../Components/Loader";
import Button from "../../Components/Button";
import Footer from "../../Components/Footer";
import ProfileActions from "../../Components/ProfileActions";
import ShowEducation from "../../Components/ShowEducation";
import ShowExperience from "../../Components/ShowExperience";

const ManageProfile = ({
  getUserProfile,
  auth: { user },
  compProfile: { profile, loading },
}) => {
  useEffect(() => {
    getUserProfile();
  }, []);
  return profile === null && loading ? (
    <Loader />
  ) : (
    <div>
      <Header />
      <div>
        <h1 className="large">Manage Profile</h1>
        <p className="lead">
          {" "}
          <AiOutlineUser /> Welcome {user && user.name}
        </p>
        {profile !== null ? (
          <div>
            <ProfileActions />
            <ShowExperience experience={profile.experience} />
            <ShowEducation education={profile.education} />
          </div>
        ) : (
          <div className="create-profile">
            <p>You havent't created any profile yet, please create one!</p>
            <Link to="/create-profile">
              <Button value="Create Profile" />
            </Link>
          </div>
        )}
      </div>
      <div className="free-space"></div>
      <Footer />
    </div>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  compProfile: state.profile,
});

export default connect(mapStateToProps, { getUserProfile })(ManageProfile);
