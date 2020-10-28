import React from "react";
import InnerContainer from "./innerContainer";

function Container() {
  return (
    <div className="outer">
      <div className="container">
        <h1>Should I eat at McDonalds?</h1>
      </div>
      <InnerContainer />
    </div>
  );
}

export default Container;
