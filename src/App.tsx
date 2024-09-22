import React from "react";
import Tab from "./components/Tab/use";

// 测试
// import TestCom from "./components/Space/children";
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
      <Tab />
    </div>
  );
}

export default App;
