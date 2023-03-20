import React from "react";
import "./Searchresults.css";
import { Result } from "./Result";

export const SearchResults = ({ results }) => {
  return (
    <div className="result-list">
      {results.map((result, id) => {
        // return <div key={id}>{result.name}</div>;
        return <Result result={result} key={id} />;
      })}
    </div>
  );
};
