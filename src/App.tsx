import React from "react";
import Button from "./components/Button/use"; // Button
import Alert from "./components/Alert/use";
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
      <h1>hello world</h1>
      <Button />
      <Alert />
    </div>
  );
}

export default App;
