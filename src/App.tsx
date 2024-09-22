import React from "react";
import Icon from "./components/Icon/use";

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        width: "100vw",
      }}
    >
      <h1>Lucky Design</h1>
      <Icon />
    </div>
  );
}

export default App;
