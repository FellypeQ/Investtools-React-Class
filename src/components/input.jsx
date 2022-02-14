import React from "react";

const Input = (props) => {
  return (
    <input
      style={{
        backgroundColor: "lightgray",
        minWidth: "100px",
        minHeight: "50px",
      }}
      {...props}
    />
  );
};

export default Input;
