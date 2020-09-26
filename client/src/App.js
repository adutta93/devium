import React, { Suspense, useEffect } from "react";
import "./App.css";
import Loader from "./Components/Loader";
import AppRoute from "./Router/";
import { loadUser } from "./Redux/actions/auth.action";
import setAuthToken from "./Redux/utils/setAuthToken";
import store from "./Redux/store";
if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return (
    <div className="App">
      <Suspense fallback={<Loader />}>
        <AppRoute />
      </Suspense>
    </div>
  );
}

export default App;
