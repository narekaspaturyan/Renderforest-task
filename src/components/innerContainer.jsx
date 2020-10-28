import React from "react";
import Pros from "./pros";
import Cons from "./cons";

function InnerContainer() {
  return (
    <>
      <div className="innerContainer">
        {" "}
        <Pros />
        <Cons />
      </div>
    </>
  );
}

export default InnerContainer;
