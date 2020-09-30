import React, { useEffect, Fragment } from "react";
import "./index.css";
import { Link } from "react-router-dom";
import {
  getUserProfile,
  deleteAccount,
} from "../../Redux/actions/profile.action";
import { connect } from "react-redux";
import { AiOutlineUser } from "react-icons/ai";

import DashNav from "../../Components/DashNav";
import Loader from "../../Components/Loader";
import Button from "../../Components/Button";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";

import ShowEducation from "../../Components/ShowEducation";
import ShowExperience from "../../Components/ShowExperience";

const ManageProfile = ({
  getUserProfile,
  deleteAccount,
  auth: { user },
  profile,
  loading,
}) => {
  useEffect(() => {
    getUserProfile();
  }, [getUserProfile]);

  if (profile && profile.userProfile)
    console.log("Dataaaaaaaa =====>", profile);
  return profile === null && loading ? (
    <Loader />
  ) : (
    <Fragment>
      <div className="manage-main-body">
        {profile !== null ? (
          <Fragment>
            <DashNav />
            <div className="mp-info">
              <div>
                <h1 className="large">Manage Profile</h1>
                <p className="lead">
                  {" "}
                  <AiOutlineUser /> Welcome {user && user.name}
                </p>
              </div>
              <ShowExperience
                experience={
                  profile.userProfile ? profile.userProfile.experience : []
                }
              />
              <ShowEducation
                education={
                  profile.userProfile ? profile.userProfile.education : []
                }
              />
              <div className="delBtn-my-2">
                <Button
                  deleteBtn
                  value="Delete Acount"
                  onClick={() => deleteAccount()}
                ></Button>
              </div>
            </div>
          </Fragment>
        ) : (
          <div>
            <Header />
            <div>
              <h1 className="large">Manage Profile</h1>
              <p className="lead">
                {" "}
                <AiOutlineUser /> Welcome {user && user.name}
              </p>
            </div>
            <div className="create-profile">
              <p>You havent't created any profile yet, please create one!</p>
              <Link to="/create-profile">
                <Button value="Create Profile" />
              </Link>
            </div>
          </div>
        )}
      </div>
      <div className="free-space"></div>
      <Footer />
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile.profile,
  loading: state.profile.loading,
});

export default connect(mapStateToProps, { getUserProfile, deleteAccount })(
  ManageProfile
);
