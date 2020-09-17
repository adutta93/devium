import React from "react";
import { MainBanner, SecondBanner } from "../../Components";

import {homeObjOne, homeObjTwo} from './Data'

const Home = () => {
  return (
    <div>
      <MainBanner {...homeObjOne}/>
      <MainBanner {...homeObjTwo}/>
      <SecondBanner />
    </div>
  );
};

export default Home;
