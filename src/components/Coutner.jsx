import React from "react";
import { useCounterStore } from "../store";

const Coutner = () => {
  const { count, increment, reset, setNumber } = useCounterStore();

  return (
    <div>
      <p style={{ color: "white", fontWeight: "bold" }}>{count}</p>

      <button onClick={increment}>+1</button>
      <br />

      <button style={{ marginTop: "10px" }} onClick={reset}>
        reset
      </button>
      <br />

      <button style={{ marginTop: "10px" }} onClick={() => setNumber(3)}>
        to 3
      </button>
    </div>
  );
};

export default Coutner;
