import React from "react";
import { MainBanner } from "../../Components";
import {homeObjOne, homeObjTwo} from './Data'

const Home = () => {
  return (
    <div>
      <MainBanner {...homeObjOne}/>
      <MainBanner {...homeObjTwo}/>
    </div>
  );
};

export default Home;
