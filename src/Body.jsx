import { useEffect, useState } from "react";

const Body = ({ value }) => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const url = "https://jsonplaceholder.typicode.com/users";
    const res = await fetch(url);
    const json = await res.json();
    setData(json);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const filteredData = data.filter(
    (ele) =>
      ele.id.toString().includes(value) ||
      ele.name.toLowerCase().includes(value) ||
      ele.email.toLowerCase().includes(value)
  );

  return (
    <div>
      {filteredData.map((ele) => (
        <div key={ele.id}>
          <div>{ele.id}</div>
          <div>{ele.name}</div>
          <div>{ele.email}</div>
          <br />
        </div>
      ))}
    </div>
  );
};

export default Body;
