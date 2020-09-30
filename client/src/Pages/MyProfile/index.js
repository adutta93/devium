import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getProfileById } from "../../Redux/actions/profile.action";
import Button from "../../Components/Button";
import Loader from "../../Components/Loader";
import Header from "../../Components/Header";

const MyProfile = ({ match, getProfileById, profile, loading, auth }) => {
  const [matchId, setMatchId] = useState(false);
  useEffect(() => {
    getProfileById(match.params.id);
    if (profile && profile.userProfile) {
      // console.log("Profileeeeeeee", profile.userProfile);
      // console.log("Userrrrrrrrr", profile.userProfile.user);
      // console.log("Userrrrrrrrr", profile.userProfile._id);
      // console.log("Authhhhhh", auth.user._id);

      if (
        auth.isAuthenticated &&
        auth.loading === false &&
        auth.user._id === profile.userProfile.user
      ) {
        setMatchId(true);
      }
    }
  }, [match.params.id, auth, profile, getProfileById]);

  // const newProfile = profile.userProfile;
  return (
    <Fragment>
      <Header />
      {profile === null || loading ? (
        <Loader />
      ) : (
        <Fragment>
          <Link to="/developers">
            <Button value="Back" />
          </Link>
          {matchId && (
            <Link to="/edit-profile">
              <Button value="Edit Profile" transparent />
            </Link>
          )}
        </Fragment>
      )}
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile.profile,
  loading: state.profile.loading,
});
export default connect(mapStateToProps, { getProfileById })(MyProfile);
