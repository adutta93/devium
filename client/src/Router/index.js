import React, { lazy } from "react";
import { Route, Switch } from "react-router-dom";

const SignIn = lazy(() => import("../Pages/SignIn"));
const SignUp = lazy(() => import("../Pages/SignUp"));
const AppRouter = () => {
  return (
    <div>
      <Switch>
        <Route path="/sign-in/" component={SignIn} />
        <Route path="/sign-up/" component={SignUp} />
      </Switch>
    </div>
  );
};

export default AppRouter;
