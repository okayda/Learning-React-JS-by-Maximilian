import React from "react";

const Demo = function (props) {
  console.log("Demo");

  return <p>{props.show ? "This is new!" : ""}</p>;
};

export default React.memo(Demo);
