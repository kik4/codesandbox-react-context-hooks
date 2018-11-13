import React, { useContext } from "react";
import CountContext from "../context/CountContext";

export default () => {
  const [count] = useContext(CountContext);
  return <p>You clicked {count} times</p>;
};
