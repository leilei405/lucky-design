import React from "react";

interface TestProps {
  children: React.ReactNode[];
}

function Test(props: TestProps) {
  const children2 = React.Children.toArray(props.children);

  return <div></div>;
}
// 测试提交1111

export default function App() {
  return (
    <Test>
      {[[<div>111</div>, <div>222</div>], [<div>333</div>]]}
      <span>hello world</span>
    </Test>
  );
}
