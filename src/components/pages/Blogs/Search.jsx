import React, { useState } from "react";
//<input className="search" placeholder="search blogs" onChange={(e) => setSearchTerm(e.target.value)} />
function Search({ getQuery }) {
  const [setSearch, setSearchTerm] = useState("");

  const onChange = (q) => {
    setSearchTerm(q);
    getQuery(q);
  };
  return (
    <>
      <div>
        <input
          className="search"
          placeholder="search blogs"
          value={setSearch}
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
    </>
  );
}

export default Search;
