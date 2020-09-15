import React, { Suspense } from "react";
import "./App.css";
import Loader from "./Components/Loader";
import AppRouter from "./Router/";
function App() {
  return (
    <div className="App">
      <Suspense fallback={<Loader />}>
        <AppRouter />
      </Suspense>
    </div>
  );
}

export default App;
