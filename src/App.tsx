import React, { useState } from "react";
import Transition from "./components/Transition/transition";
import Button from "./components/Button";
import Alert from "./components/Alert/alert";

function App() {
  const [show, setShow] = useState(false);
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
      <Button onClick={() => setShow(!show)}>Toggle</Button>
      <Transition in={show} timeout={300} animation="zoom-in-top">
        <div>
          <p>1111111111</p>
          <p>3333333333</p>
          <p>4444444444</p>
          <p>5555555555</p>
          <p>6666666666</p>
          <p>7777777777</p>
          <p>8888888888</p>
          <p>9999999999111</p>
        </div>
      </Transition>
      <Transition wrapper in={show} timeout={300} animation="zoom-in-top">
        <div>
          <Button>234512</Button>
        </div>
      </Transition>

      <Alert title="1111111111111" />
    </div>
  );
}

export default App;
