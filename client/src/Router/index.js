import React, { lazy } from "react";
import { Switch, Route } from "react-router-dom";
// import { Header } from "../Components";
// import { Footer } from "../Components";

const Home = lazy(() => import("../Pages/Home"));
const Premium = lazy(() => import("../Pages/Premium"));
const Register = lazy(() => import("../Pages/Register"));
const SignIn = lazy(() => import("../Pages/SignIn"));
const AppRouter = () => {
  return (
    <div>
      {/*<Header />*/}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/premium" component={Premium} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/signin" component={SignIn} />
      </Switch>
      {/*<Footer />*/}
    </div>
  );
};

export default AppRouter;
