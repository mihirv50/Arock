import React from "react";
import LoadParent from "./Components/Loading/LoadParent";
import { Home } from "./Components/Landing/Home";

const App = () => {
  return (
    <>
      <div className="h-screen bg-[#111] overflow-hidden">
        <LoadParent />
        <Home />
      </div>
    </>
  );
};

export default App;
