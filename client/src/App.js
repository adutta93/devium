import React, { Suspense } from "react";
import "./App.css";
import Loader from "./Components/Loader";

function App() {
  return (
    <div className="App">
      <Suspense fallback={<Loader />}>
        
      </Suspense>
    </div>
  );
}

export default App;
