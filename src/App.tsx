import React from "react";
import Menu1 from "./components/Menu/use1";
import Menu2 from "./components/Menu/use2";

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
      <Menu1 />
      <hr />
      <Menu2 />
    </div>
  );
}

export default App;
