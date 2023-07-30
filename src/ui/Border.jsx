import React from "react";

const Border = ({ children }) => {
  return (
    <div
      style={{
        border: "1px solid silver",
        borderRadius: "10px",
        padding: "1rem 1rem 0 1rem",
      }}
    >
      {children}
    </div>
  );
};

export default Border;
