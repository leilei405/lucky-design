import { Button } from "antd";
import { ConfigProvider } from "./ConfigProvider";
import { useMessage } from "./hooks";

function Message() {
  const message = useMessage();

  // test
  // 测试
  return (
    <Button
      type="primary"
      onClick={() => {
        message.add({
          content: "请求成功",
        });
      }}
    >
      成功
    </Button>
  );
}

function App() {
  return (
    <ConfigProvider>
      <div>
        <Message></Message>
      </div>
    </ConfigProvider>
  );
}

export default App;
