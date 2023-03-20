import React from "react";
import "./Result.css";

export const Result = ({ result }) => {
  return (
    <div
      className="result"
      onClick={(event) => alert("Selected: " + result.name)}
    >
      {result.name}
    </div>
  );
};
