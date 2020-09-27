import React, { useEffect } from "react";
import Header from "../../Components/Header";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getUserProfile } from "../../Redux/actions/profile.action";

const UserProfile = ({ getUserProfile, auth, profile }) => {
  useEffect(() => {
    getUserProfile();
  }, []);
  return (
    <div>
      <Header />
      <h1>DASHBOARD</h1>
    </div>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});

export default connect(mapStateToProps, { getUserProfile })(UserProfile);
