import React from "react";
import TheContent from "./TheContent";
import NavigationBar from "../components/NavigationBar";

const TheLayout = () => {
  return (
    <div className="c-wrapper">
      <NavigationBar />
      <div className="c-body">
        <TheContent />
      </div>
    </div>
  );
};

export default TheLayout;
