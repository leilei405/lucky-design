import React from "react";
import Icon from "./components/Icon/use";
import Menu from "./components/Menu/use1";

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
      <Menu />
    </div>
  );
}

export default App;
