import React from "react";
import { MainBanner, SecondBanner, Footer, Header } from "../../Components";
import { connect } from "react-redux";
import { homeObjOne, homeObjTwo } from "./Data";
import { Redirect } from "react-router-dom";

const Home = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to="/manageprofile" />;
  }

  return (
    <div>
      <Header />
      <MainBanner {...homeObjOne} />
      <MainBanner {...homeObjTwo} />
      <SecondBanner />
      <Footer />
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(Home);
