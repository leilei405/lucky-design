/*
 * @Author: leilei405 1601178425@qq.com
 * @Date: 2024-10-03 20:04:38
 * @LastEditors: leilei405 1601178425@qq.com
 * @LastEditTime: 2024-10-11 23:07:34
 * @FilePath: \lucky-design\src\components\Watermark\watermark.tsx
 */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC, useCallback, useEffect, useRef } from "react";
import { WatermarkProps } from "./type";
import { useWatermark } from "./hooks";
const WaterMark: FC<WatermarkProps> = (props) => {
  const {
    zIndex,
    style,
    className,
    image,
    width,
    height,
    rotate,
    content,
    fontStyle,
    gap,
    offset,
    children,
  } = props;

  const containerRef = useRef<HTMLDivElement>(null);

  // getContainer默认用containerRef.current，或者传入的 props.getContainer。
  const getContainer = useCallback(() => {
    return props.getContainer ? props.getContainer() : containerRef.current!;
  }, [containerRef.current, props.getContainer]);

  // 调用useWatermark，返回generateWatermark方法。
  // 然后参数变化的时候，调用generateWatermark绘制水印。

  // getContainer我们加了useCallback避免每次都变，对象参数（fontSize）
  // 数组参数（gap、offset）用 JSON.stringify 序列化后再放到 deps(依赖) 数组里
  const { generateWatermark } = useWatermark({
    zIndex,
    width,
    height,
    rotate,
    image,
    content,
    fontStyle,
    gap,
    offset,
    getContainer,
  });

  useEffect(() => {
    generateWatermark({
      zIndex,
      width,
      height,
      rotate,
      image,
      content,
      fontStyle,
      gap,
      offset,
      getContainer,
    });
  }, [
    zIndex,
    width,
    height,
    rotate,
    image,
    content,
    JSON.stringify(props.fontStyle),
    JSON.stringify(props.gap),
    JSON.stringify(props.offset),
    getContainer,
  ]);

  return props.children ? (
    <div className={className} style={style} ref={containerRef}>
      {children}
    </div>
  ) : null;
};

export default WaterMark;
