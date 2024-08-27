import React from "react";

interface TestProps {
  children: React.ReactNode[];
}

function Test(props: TestProps) {
  const children2 = React.Children.toArray(props.children);

  // console.log(props.children);
  // console.log(children2);
  return <div></div>;
}

export default function App() {
  return (
    <Test>
      {[[<div>111</div>, <div>222</div>], [<div>333</div>]]}
      <span>hello world</span>
    </Test>
  );
}
