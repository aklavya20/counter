import Child1 from "./Child1";
import Child2 from "./Child2";

const Parent1 = () => {
  const object = {
    name: "Aklavya Pathak",
    age: 20,
    address: {
      firstLine: "Flat No. 101 Silviya Apartment,",
      secondLine: "   Opp Dena Bank Kilvani Naka",
      city: "Silvassa",
      pinCode: 396230,
      state: "Dadra and Nagar Haveli",
      country: "India",
    },
  };

  return (
    <>
      <h1>I am Parent</h1>
      <Child1 data={object} />
      <Child2 details={object} />
    </>
  );
};

export default Parent1;
