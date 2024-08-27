import React from "react";
import { Space } from "antd";
import "./c.scss";
const SpaceCom = () => {
  return (
    <Space
      direction="horizontal"
      style={{ height: 200, backgroundColor: "blanchedalmond" }}
      align="start"
      wrap
      split={
        <div className="box" style={{ background: "yellow" }}>
          1111
        </div>
      }
    >
      <div className="box">1</div>
      <div className="box">2</div>
      <div className="box">3</div>
      <div className="box">4</div>
      <div className="box">5</div>
      <div className="box">6</div>
      <div className="box">7</div>
      <div className="box">8</div>
    </Space>
  );
};
export default SpaceCom;
