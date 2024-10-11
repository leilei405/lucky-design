/*
 * @Author: leilei405 1601178425@qq.com
 * @Date: 2024-10-03 20:55:21
 * @LastEditors: leilei405 1601178425@qq.com
 * @LastEditTime: 2024-10-11 22:37:15
 * @FilePath: \lucky-design\src\components\Watermark\type.ts
 */

import { CSSProperties, PropsWithChildren, ReactNode } from "react";

export interface WatermarkProps extends PropsWithChildren {
  style?: CSSProperties;
  className?: string;
  zIndex?: string | number;
  width?: number;
  height?: number;
  rotate?: number;
  image?: string;
  content?: string | string[];
  fontStyle?: {
    color?: string;
    fontFamily?: string;
    fontSize?: number | string;
    fontWeight?: number | string;
  };
  /** 俩个水印之间的空白距离 */
  gap?: [number, number];
  /** offset是水印相对于container容器的偏移量 也就是左上角的空白距离 */
  offset?: [number, number];
  getContainer?: () => HTMLElement;
  children: ReactNode;
}
