import React, { Suspense } from "react";
import "./App.css";
import Loader from "./Components/Loader";
import AppRoute from "./Router/";
function App() {
  return (
    <div className="App">
      <Suspense fallback={<Loader />}>
        <AppRoute />
      </Suspense>
    </div>
  );
}

export default App;
