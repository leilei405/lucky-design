/*
 * @Author: leilei405 1601178425@qq.com
 * @Date: 2024-10-05 21:46:39
 * @LastEditors: leilei405 1601178425@qq.com
 * @LastEditTime: 2024-10-11 23:50:44
 * @FilePath: \lucky-design\src\components\Watermark\use.tsx
 */
import Watermark from "./watermark";

const App = () => {
  return (
    <Watermark
      gap={[100, 100]}
      offset={[50, 100]}
      content={["测试水印", "Lucky"]}
    >
      <div style={{ height: 800 }}>
        <p>
          不定积分白及颗粒没出门上课节奏VB女神泪看不见女博士看见了比较快女厕看不见
        </p>
        <p>
          不定积分白及颗粒没出门上课节奏VB女神泪看不见女博士看见了比较快女厕看不见
        </p>
        <p>
          不定积分白及颗粒没出门上课节奏VB女神泪看不见女博士看见了比较快女厕看不见
        </p>
        <p>
          不定积分白及颗粒没出门上课节奏VB女神泪看不见女博士看见了比较快女厕看不见
        </p>
        <p>
          不定积分白及颗粒没出门上课节奏VB女神泪看不见女博士看见了比较快女厕看不见
        </p>
        <p>
          不定积分白及颗粒没出门上课节奏VB女神泪看不见女博士看见了比较快女厕看不见
        </p>
        <p>
          L不定积分白及颗粒没出门上课节奏VB女神泪看不见女博士看见了比较快女厕看不见
        </p>
      </div>
    </Watermark>
  );
};

export default App;
