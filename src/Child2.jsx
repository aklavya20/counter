const Child2 = ({
  details: {
    name,
    age,
    address: { firstLine, secondLine, city, state, country },
  },
}) => {
  return (
    <>
      <h1>I am Child 2</h1>
      <h2>Name: {name}</h2>
      <h2>Age: {age}</h2>
      <h2>
        Address: {firstLine}
        {secondLine}
      </h2>
      <h2>City: {city}</h2>
      <h2>State: {state}</h2>
      <h2>Country: {country}</h2>
    </>
  );
};

export default Child2;
