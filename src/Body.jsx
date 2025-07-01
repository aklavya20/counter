const Body = ({ datas }) => {
  console.log(datas);
  return (
    <div>
      {datas &&
        datas.map((filteredData, index) => (
          <div key={index}>
           
            <div>{filteredData.name}</div>
            
          </div>
        ))}
      
    </div>
  );
};

export default Body;
