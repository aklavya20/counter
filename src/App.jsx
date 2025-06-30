import { useEffect, useState } from "react";

// import Counter from "./counter";
// import Comments from "./comments";
// import Child from "./child";
// import Parent from "./Parent";
// import Parent1 from "./Parent1";
import Search from "./Search";

const App = () => {
  // function getData(data) {
  //   console.log(data);
  // }
  // const [userData, setUserData] = useState("");
  // useEffect(() => {
  //   async function fetchUrl() {
  //     const url = "https://jsonplaceholder.typicode.com/users";
  //     const response = fetch(url);
  //     const data = response.json();
  //   }
  //   fetch;
  // }, []);
  return (
    <div>
      {/* {userData && (
        <>
          <div>userData.id</div>
          <div>userData.name</div>
          <div>userData.username</div>
          <div>userData.email</div>
          <div>userData.address.street</div>
          <div>userData.address.suite</div>
          <div>userData.address.city</div>
          <div>userData.address.zipcode</div>
        </>
      )} 
    <Child getData={getData} /> 
      <Comments /> 
     <Comments />
      <Counter /> 
       <Parent /> 
       <Parent1 /> */}
      <Search />
    </div>
  );
};

export default App;
