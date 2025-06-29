import React, { useState } from "react";

const Child = (props) => {
  function formHandler(e) {
    e.preventDefault();
    props.getData(input);
  }
  const [input, setInput] = useState("");
  return (
    <div>
      <form onSubmit={formHandler}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Submit </button>
      </form>
    </div>
  );
};

export default Child;
