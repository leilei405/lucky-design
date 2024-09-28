/*
 * @Author: leilei405 1601178425@qq.com
 * @Date: 2024-09-29 00:33:34
 * @LastEditors: leilei405 1601178425@qq.com
 * @LastEditTime: 2024-09-29 00:33:50
 * @FilePath: \lucky-design\src\components\Message\message-item.tsx
 */
import { FC } from "react";
import { useTimer } from "./hooks";
import { IMessageProps } from "./type";

export const MessageItem: FC<IMessageProps> = (item) => {
  const { onMouseEnter, onMouseLeave } = useTimer({
    id: item.id!,
    duration: item.duration,
    remove: item.onClose!,
  });

  return (
    <div
      className="message-item"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {item.content}
    </div>
  );
};
