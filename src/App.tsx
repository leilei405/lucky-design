import React from "react";
import Button from "./components/Button";
function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
      }}
    >
      <div style={{ width: 500 }}>
        <Button style={{ margin: 5 }} type="primary" size="large">
          button
        </Button>
        <Button style={{ margin: 5 }} type="dark" size="large">
          button
        </Button>
        <Button style={{ margin: 5 }} type="link" size="large">
          button
        </Button>
        <Button style={{ margin: 5 }} type="success" size="large">
          button
        </Button>
      </div>
    </div>
  );
}

export default App;
