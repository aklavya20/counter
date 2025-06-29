const Child1 = (properties) => {
  return (
    <>
      <h1>I am Child</h1>
      <h2>Name: {properties.data.name}</h2>
      <h2>Age: {properties.data.age}</h2>
      <h2>
        Address: {properties.data.address.firstLine}
        {properties.data.address.secondLine}
      </h2>
      <h2>City: {properties.data.address.city}</h2>
      <h2>State: {properties.data.address.state}</h2>
      <h2>Country: {properties.data.address.country}</h2>
    </>
  );
};

export default Child1;
