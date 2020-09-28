import React, { useEffect, Fragment } from "react";
import "./index.css";
import { Link } from "react-router-dom";
import { AiOutlineUser } from "react-icons/ai";
import Header from "../../Components/Header";
import { connect } from "react-redux";
import Loader from "../../Components/Loader";
import Button from "../../Components/Button";
import Footer from "../../Components/Footer";
import ProfileAction from "../../Components/ProfileActions";
import { getUserProfile } from "../../Redux/actions/profile.action";
import ProfileActions from "../../Components/ProfileActions";

const ManageProfile = ({
  getUserProfile,
  auth: { user },
  profile: { profile, loading },
}) => {
  useEffect(() => {
    getUserProfile();
  }, []);
  return profile === null && loading ? (
    <Loader />
  ) : (
    <div>
      <Header />
      <Fragment>
        <h1 className="large">Manage Profile</h1>
        <p className="lead">
          {" "}
          <AiOutlineUser /> Welcome {user && user.name}
        </p>
        {profile !== null ? (
          <Fragment>
            <ProfileActions />
          </Fragment>
        ) : (
          <div className="create-profile">
            <p>You havent't created any profile yet, please create one!</p>
            <Link to="/create-profile">
              <Button value="Create Profile" />
            </Link>
          </div>
        )}
      </Fragment>
      <div className="free-space"></div>
      <Footer />
    </div>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});

export default connect(mapStateToProps, { getUserProfile })(ManageProfile);
