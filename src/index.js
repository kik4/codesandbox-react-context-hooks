import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import CountContext from "./context/CountContext";
import ClickMe from "./molecules/ClickMe";
import "./styles.css";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });

  return (
    <div className="App">
      <CountContext.Provider value={[count, setCount]}>
        <ClickMe />
      </CountContext.Provider>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
