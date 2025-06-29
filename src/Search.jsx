import { useState } from "react";
import Body from "./Body";

const Search = () => {
  const [search, setSearch] = useState("");
  return (
    <div>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value.toLowerCase())}
      />
      <Body value={search} />
    </div>
  );
};

export default Search;
