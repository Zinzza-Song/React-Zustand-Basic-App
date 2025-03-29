import React from "react";
import { useCounterStore } from "../store/useCounterStore";

const Coutner = () => {
  const { count, increment, reset, setNumber } = useCounterStore();

  const clear = () => {
    useCounterStore.persist.clearStorage();
  };

  return (
    <div>
      <p style={{ color: "white", fontWeight: "bold" }}>{count}</p>

      <button style={{ marginRight: "10px" }} onClick={increment}>
        +1
      </button>

      <button style={{ marginRight: "10px" }} onClick={reset}>
        reset
      </button>

      <button style={{ marginRight: "10px" }} onClick={() => setNumber(3)}>
        to 3
      </button>

      <button style={{ marginRight: "10px" }} onClick={clear}>
        clear
      </button>
    </div>
  );
};

export default Coutner;
