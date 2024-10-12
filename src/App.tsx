import React, { useState } from "react";
import Transition from "./components/Transition/transition";
import Button from "./components/Button/button";
import Alert from "./components/Alert/alert";
import Space from "./components/Space/use";
import Message from "./components/Message/use";
import WaterMark from "./components/Watermark/use";
import Popover from "./components/Popover/popver";

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
        </div>
      </Transition>
      <Transition wrapper in={show} timeout={300} animation="zoom-in-top">
        <div>
          <Button>234512</Button>
        </div>
      </Transition>

      <Alert title="11111" />

      <Space />

      <hr />
      <Message />

      <hr />
      <WaterMark />

      <hr />
      <Popover />
    </div>
  );
}

export default App;
