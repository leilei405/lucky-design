import React from "react";
import Button from "./components/Button/useButton"; // Button
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
      <Button />
    </div>
  );
}

export default App;
