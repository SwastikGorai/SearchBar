import { useState } from "react";

import "./App.css";
import { Searchbar } from "./components/Searchbar";
import { SearchResults } from "./components/Searchresults";

function App() {
  const [results, setResults] = useState([]);
  return (
    <div className="App">
      <div className="searchbar-container">
        <Searchbar setResults={setResults} />
        <SearchResults results={results} />
      </div>
    </div>
  );
}

export default App;
