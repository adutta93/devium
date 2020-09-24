import React from "react";
import { MainBanner, SecondBanner, Footer, Header } from "../../Components";

import { homeObjOne, homeObjTwo } from "./Data";

const Home = () => {
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

export default Home;
