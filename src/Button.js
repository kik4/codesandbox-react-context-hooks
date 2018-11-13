import React, { useContext } from "react";
import CountContext from "./CountContext";

export default () => {
  const [count, setCount] = useContext(CountContext);
  return <button onClick={() => setCount(count + 1)}>Click me</button>;
};
