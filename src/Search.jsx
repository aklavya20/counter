import { useState, useEffect } from "react";
import Body from "./Body";

const Search = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [search, setSearch] = useState("");
  //const [searchValue, setSearchValue] = useState("");

  const fetchData = async () => {
    const url = "https://jsonplaceholder.typicode.com/users";
    const res = await fetch(url);
    const json = await res.json();
    setData(json);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleClick = () => {
    if (search == "") {
      setFilteredData(data);
    } else {
      const filteredDatas = data.filter((ele) =>
        ele.name.toLowerCase().includes(search)
      );
      setFilteredData(filteredDatas);
    }
  };

  // const filteredData = data.filter((ele) =>
  //   ele.name.toLowerCase().includes(searchValue)
  // );

  return (
    <div>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value.toLowerCase())}
      />
      <button onClick={handleClick}>Search</button>
      <Body datas={filteredData} />
    </div>
  );
};

export default Search;
