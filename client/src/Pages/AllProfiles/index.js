import React, { Fragment, useEffect } from "react";
import "./index.css";
import { connect } from "react-redux";
import { getAllProfiles } from "../../Redux/actions/profile.action";
import ProfileItem from "../../Components/ProfileItem";
import Loader from "../../Components/Loader";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";

const AllProfiles = ({ getAllProfiles, profiles, loading }) => {
  useEffect(() => {
    getAllProfiles();
  }, [getAllProfiles]);
  console.log("Yaaayyyyy", profiles);
  return (
    <Fragment>
      <Header />
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <div className="ap-heading">
            <h1 className="ap-large">Developer connections</h1>
            <p className="ap-lead">Browse and connect with developers</p>
          </div>
          <div>
            <div className="ap-profile">
              {profiles.length > 0 ? (
                <Fragment>
                  {profiles.profiles.map((profile) => (
                    <ProfileItem key={profile._id} profile={profile} />
                  ))}
                </Fragment>
              ) : (
                <h4>No profile found...!!!</h4>
              )}
            </div>
          </div>
        </Fragment>
      )}
      <div className="ap-space"></div>
      <Footer />
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  profiles: state.profile.profiles,
  loading: state.profile.loading,
});
export default connect(mapStateToProps, { getAllProfiles })(AllProfiles);
