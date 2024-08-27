import React from "react";
import Space from "./index";
import { ConfigProvider } from "./ConfigProvider";
import "./c.scss";
const SpaceCom = () => {
  return (
    <ConfigProvider space={{ size: 20 }}>
      <Space direction="horizontal">
        <div className="box">1</div>
        <div className="box">2</div>
        <div className="box">3</div>
        <div className="box">4</div>
        <div className="box">5</div>
      </Space>
      <Space direction="vertical">
        <div className="box">1</div>
        <div className="box">2</div>
        <div className="box">3</div>
        <div className="box">4</div>
        <div className="box">5</div>
      </Space>
    </ConfigProvider>
  );
};
export default SpaceCom;
