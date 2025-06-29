import React, { useEffect, useState } from "react";

const Comments = () => {
  const [id, setId] = useState(1);
  const [data, setData] = useState();

  async function fetchData() {
    console.log(id);
    let url = `https://jsonplaceholder.typicode.com/comments?postId=${id}`;
    console.log(id);
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    setData(data);
  }

  const fetchData2 = async () => {
    console.log(id);
    let url = `https://jsonplaceholder.typicode.com/comments?postId=${id}`;
    console.log(id);
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    setData(data);
  };

  // useEffect(() => {
  //   fetchData();
  // }, [id]);

  useEffect(() => {
    fetchData2();
  }, [id]);

  return (
    <div>
      <select onChange={(e) => setId(e.target.value)}>
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
      </select>
      {data &&
        data.map((datas, index) => (
          <div key={index}>
            <div>PostId:{datas.postId}</div>
            <div>Id:{datas.id}</div>
            <div>Name:{datas.name}</div>
            <div>Email:{datas.email}</div>
            <div>Body:{datas.body}</div>
            <br />
          </div>
        ))}
    </div>
  );
};

export default Comments;
