import React from "react";
import Button from "./components/Button/use"; // Button
import Alert from "./components/Alert/use";
import Menu from "./components/Menu/use";
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
      <h5 style={{ textAlign: "center", color: "red" }}>按钮</h5>
      <Button />
      <h5 style={{ textAlign: "center", color: "red" }}>Alert</h5>
      <Alert />
      <h5 style={{ textAlign: "center", color: "red" }}>Menu</h5>
      <Menu />
    </div>
  );
}

export default App;
