import React from "react";
import Icon from "./components/Icon/use";
import Menu1 from "./components/Menu/use1";
import Menu2 from "./components/Menu/use2";

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
      <Menu2 />
      <Menu1 />
    </div>
  );
}

export default App;
