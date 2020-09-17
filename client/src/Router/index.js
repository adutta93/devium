import React, { lazy } from "react";
import { Switch, Route } from "react-router-dom";
import { Header } from "../Components";
import { Footer } from "../Components";

const Home = lazy(() => import("../Pages/Home"));
const AppRouter = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
     
    </div>
  );
};

export default AppRouter;
