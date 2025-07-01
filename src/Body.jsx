const Body = ({ datas }) => {
  console.log(datas);
  return (
    <div>
      {datas &&
        datas.map((filteredData, index) => (
          <div key={index}>
            {/* <div>{filteredData.id}</div> */}
            <div>{filteredData.name}</div>
            {/* <div>{filteredData.email}</div> */}
          </div>
        ))}
      {/* {datas.filteredData.map((ele) => (
        <div key={ele.id}>
          <div>{ele.id}</div>
          <div>{ele.name}</div>
          <div>{ele.email}</div>
          <br />
        </div>
      ))} */}
    </div>
  );
};

export default Body;
