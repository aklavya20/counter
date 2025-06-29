import React, { useState } from "react";

const counter = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      counter: {counter}
      <button onClick={() => setCounter(counter + 1)}>+</button>
    </div>
  );
};

export default counter;
