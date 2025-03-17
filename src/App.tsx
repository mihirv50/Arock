import React from "react";
import LoadParent from "./Components/Loading/LoadParent";
import { Home } from "./Components/Landing/Home";
import MenuPage from "./Components/Menu/MenuPage";

const App = () => {
  return (
    <>
      <div className="h-screen text-white bg-[#111] overflow-hidden tracking-widest">
        <MenuPage/>
        <LoadParent />
        <Home />
      </div>
    </>
  );
};

export default App;
