import React from "react";
import { useCounterStore } from "../store";

const Coutner = () => {
  const { count, increment } = useCounterStore();

  return (
    <div>
      <p style={{ color: "white", fontWeight: "bold" }}>{count}</p>
      <button onClick={increment}>+1</button>
    </div>
  );
};

export default Coutner;
