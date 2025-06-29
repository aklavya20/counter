import { useEffect, useState } from "react";
import Children from "./Children";

const Parent = () => {
  const [post, setPost] = useState(1);
  const [postData, setPostData] = useState([]);
  const [search, setSearch] = useState("");
  const getPost = async () => {
    console.log(post);
    const url = `https://jsonplaceholder.typicode.com/comments?postId=${post}`;
    console.log(post);
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    setPostData(data);
  };
  useEffect(() => {
    getPost();
  }, [post]);
  const id = [1, 2, 3, 4, 5, 6, 7];
  return (
    <div>
      <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)} />
      <select onChange={(e) => setPost(e.target.value)}>
        {id.map((id, index) => (
          <option key={index} value={id}>
            {id}
          </option>
        ))}
      </select>

      <Children data={postData} search={search} />
    </div>
  );
};

export default Parent;
