import { CSSProperties, ReactNode } from "react";

export type Position = "top" | "bottom";

export interface IMessageProps {
  style?: CSSProperties;
  className?: string | Array<string>;
  content: ReactNode | string;
  duration?: number;
  onClose?: (...args: any) => void;
  id?: number;
  position?: Position;
}

export interface IMessageRef {
  add: (messageProps: IMessageProps) => number;
  remove: (id: number) => void;
  update: (id: number, messageProps: IMessageProps) => void;
  clearAll: () => void;
}
