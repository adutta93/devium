import React from "react";
import { MainBanner, SecondBanner, Footer } from "../../Components";

import { homeObjOne, homeObjTwo } from "./Data";

const Home = () => {
  return (
    <div>
      <MainBanner {...homeObjOne} />
      <MainBanner {...homeObjTwo} />
      <SecondBanner />
      <Footer />
    </div>
  );
};

export default Home;
