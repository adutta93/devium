import React, { lazy } from "react";
import { Switch, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
// import { Footer } from "../Components";

const Home = lazy(() => import("../Pages/Home"));
const Premium = lazy(() => import("../Pages/Premium"));
const Register = lazy(() => import("../Pages/Register"));
const SignIn = lazy(() => import("../Pages/SignIn"));
const ManageProfile = lazy(() => import("../Pages/ManageProfile"));
const CreateProfile = lazy(() => import("../Pages/CreateProfile"));
const EditProfile = lazy(() => import(".././Components/EditProfileForm"));
const AddExperirnce = lazy(() => import(".././Components/AddExperience"));
const AddEducation = lazy(() => import(".././Components/AddEducation"));
const AllPosts = lazy(() => import("../Pages/AllPosts"));

const AppRouter = () => {
  return (
    <div>
      {/*<Header />*/}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/signin" component={SignIn} />
        <PrivateRoute exact path="/premium" component={Premium} />
        <PrivateRoute exact path="/manageprofile" component={ManageProfile} />
        <PrivateRoute exact path="/create-profile" component={CreateProfile} />
        <PrivateRoute exact path="/edit-profile" component={EditProfile} />
        <PrivateRoute exact path="/add-experirnce" component={AddExperirnce} />
        <PrivateRoute exact path="/add-education" component={AddEducation} />
        <PrivateRoute exact path="/posts" component={AllPosts} />
      </Switch>
      {/*<Footer />*/}
    </div>
  );
};

export default AppRouter;
