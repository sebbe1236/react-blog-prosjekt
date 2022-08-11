import React from "react";

function Heading(props) {
  return (
    <>
      <h1 className="text-center p-3">{props.heading}</h1>
    </>
  );
}

export default Heading;
