import { useEffect, useRef, useState } from "react";
import { merge } from "lodash";
import { WatermarkProps } from "../type";

export type WatermarkOptions = Omit<
  WatermarkProps,
  "className" | "style" | "children"
>;

function isNumber(obj: any): obj is number {
  return (
    Object.prototype.toString.call(obj) === "[object Number]" && obj === obj
  );
}

// 将第一个参数转为number 不是则返回第二个参数的默认值
const toNumber = (value?: string | number, defaultValue?: number) => {
  if (value === undefined) {
    return defaultValue;
  }
  if (isNumber(value)) {
    return value;
  }
  const numberVal = parseFloat(value);
  return isNumber(numberVal) ? numberVal : defaultValue;
};

// 默认的options 默认值
const defaultOptions = {
  rotate: -20,
  zIndex: 1,
  width: 100,
  gap: [100, 100],
  fontStyle: {
    fontSize: "16px",
    color: "rgba(0, 0, 0, 0.15)",
    fontFamily: "sans-serif",
    fontWeight: "normal",
  },
  getContainer: () => document.body,
};

/**
 * 主要是合并逻辑 先合并传入的options 如果没有传入则用默认值
 * @description 处理下option,和默认options做下合并
 * @param o 传入的options
 * @returns
 */
const getMergedOptions = (options: Partial<WatermarkOptions>) => {
  const mergedOptions = {
    ...options,
    rotate: options.rotate || defaultOptions.rotate,
    zIndex: options.zIndex || defaultOptions.zIndex,
    // fontStyle 是默认 fontStyle 和传入的 fontStyle 的合并
    fontStyle: { ...defaultOptions.fontStyle, ...options.fontStyle },
    // width的默认,如果是图片就用默认width,否则undefined,因为后面文字宽度是动态算的。
    width: toNumber(
      options.width,
      options.image ? defaultOptions.width : undefined
    ),
    height: toNumber(options.height, undefined)!,
    getContainer: options.getContainer!,
    gap: [
      toNumber(options.gap?.[0], defaultOptions.gap[0]),
      toNumber(options.gap?.[1] || options.gap?.[0], defaultOptions.gap[1]),
    ],
  } as Required<WatermarkOptions>;

  const mergedOffsetX = toNumber(mergedOptions.offset?.[0], 0)!;
  const mergedOffsetY = toNumber(
    mergedOptions.offset?.[1] || mergedOptions.offset?.[0],
    0
  )!;
  mergedOptions.offset = [mergedOffsetX, mergedOffsetY];

  return mergedOptions;
};

const measureTextSize = (
  ctx: CanvasRenderingContext2D,
  content: string[],
  rotate: number
) => {
  let width = 0;
  let height = 0;
  const lineSize: Array<{ width: number; height: number }> = [];

  content.forEach((item) => {
    const {
      width: textWidth,
      fontBoundingBoxAscent,
      fontBoundingBoxDescent,
    } = ctx.measureText(item);

    const textHeight = fontBoundingBoxAscent + fontBoundingBoxDescent;

    if (textWidth > width) {
      width = textWidth;
    }

    height += textHeight;
    lineSize.push({ height: textHeight, width: textWidth });
  });

  const angle = (rotate * Math.PI) / 180;

  return {
    originWidth: width,
    originHeight: height,
    width: Math.ceil(
      Math.abs(Math.sin(angle) * height) + Math.abs(Math.cos(angle) * width)
    ),
    height: Math.ceil(
      Math.abs(Math.sin(angle) * width) + Math.abs(height * Math.cos(angle))
    ),
    lineSize,
  };
};

// 绘制水印的方法
const getCanvasData = async (
  options: Required<WatermarkOptions>
): Promise<{ width: number; height: number; base64Url: string }> => {
  const { rotate, image, content, fontStyle, gap } = options || {};

  // 创建一个canvas
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d")!;

  const ratio = window.devicePixelRatio;

  // 封装configCanvas 方法, 来设置 canvas 的宽高、rotate、scale
  const configCanvas = (size: { width: number; height: number }) => {
    const canvasWidth = gap[0] + size.width;
    const canvasHeight = gap[1] + size.height;

    canvas.setAttribute("width", `${canvasWidth * ratio}px`);
    canvas.setAttribute("height", `${canvasHeight * ratio}px`);
    canvas.style.width = `${canvasWidth}px`;
    canvas.style.height = `${canvasHeight}px`;

    // 用translate移动中心点到宽高的一半的位置再scale、rotate。
    // 因为不同屏幕的设备像素比不一样,也就是1px对应的物理像素不一样
    // 所以要在单位后面乘以devicePixelRatio。
    // 设置了scale放大devicePixelRatio倍,这样接下来绘制尺寸就不用乘以设备像素比了
    ctx.translate((canvasWidth * ratio) / 2, (canvasHeight * ratio) / 2);
    ctx.scale(ratio, ratio);

    const RotateAngle = (rotate * Math.PI) / 180;
    ctx.rotate(RotateAngle);
  };

  // 封装 drawText drawImage 优先绘制image
  const drawText = () => {
    const { fontSize, color, fontWeight, fontFamily } = fontStyle;
    const realFontSize = toNumber(fontSize, 0) || fontStyle.fontSize;

    ctx.font = `${fontWeight} ${realFontSize}px ${fontFamily}`;
    const measureSize = measureTextSize(ctx, [...content], rotate);

    const width = options.width || measureSize.width;
    const height = options.height || measureSize.height;

    configCanvas({ width, height });

    ctx.fillStyle = color!;
    ctx.font = `${fontWeight} ${realFontSize}px ${fontFamily}`;
    ctx.textBaseline = "top";

    [...content].forEach((item, index) => {
      const { height: lineHeight, width: lineWidth } =
        measureSize.lineSize[index];

      const xStartPoint = -lineWidth / 2;
      const yStartPoint =
        -(options.height || measureSize.originHeight) / 2 + lineHeight * index;

      ctx.fillText(
        item,
        xStartPoint,
        yStartPoint,
        options.width || measureSize.originWidth
      );
    });
    return Promise.resolve({ base64Url: canvas.toDataURL(), height, width });
  };

  function drawImage() {
    return new Promise<{ width: number; height: number; base64Url: string }>(
      (resolve) => {
        // 指定src加载图片
        const img = new Image();
        img.crossOrigin = "anonymous";
        img.referrerPolicy = "no-referrer";

        img.src = image;
        img.onload = () => {
          let { width, height } = options;
          if (!width || !height) {
            if (width) {
              height = (img.height / img.width) * +width;
            } else {
              width = (img.width / img.height) * +height;
            }
          }
          // 调用configCanvas修改canvas的宽高、缩放、旋转
          configCanvas({ width, height });

          // 之后在中心点绘制一张图片，返回 base64 的结果
          ctx.drawImage(img, -width / 2, -height / 2, width, height);
          return resolve({ base64Url: canvas.toDataURL(), width, height });
        };
        // 当加载失败时，onerror 里绘制文本
        img.onerror = () => {
          return drawText();
        };
      }
    );
  }

  return image ? drawImage() : drawText();
};

/**
 * @description 自定义hook来绘制水印
 * @param params 去掉style className children
 * @returns
 */
export const useWatermark = (params: WatermarkOptions) => {
  // 把传入的params 保存到state中, 根据它渲染
  const [options, setOptions] = useState(params || {});

  const mergedOptions = getMergedOptions(options);
  // 创建dom用useRef 保存水印元素的dom
  const watermarkDiv = useRef<HTMLDivElement>();
  // 防止删除功能
  const mutationObserver = useRef<MutationObserver>();

  const container = mergedOptions.getContainer();
  const { zIndex, gap } = mergedOptions;

  function drawWatermark() {
    if (!container) {
      return;
    }

    // 调用getCanvasData 方法来绘制 返回base64Url、width、height 这些信息
    // 使用 useRef 来保存水印元素的 dom
    getCanvasData(mergedOptions).then(({ base64Url, width, height }) => {
      const offsetLeft = mergedOptions.offset[0] + "px";
      const offsetTop = mergedOptions.offset[1] + "px";

      // background-size 是 gap + width、gap + height 算出的
      const wmStyle = `
        width:calc(100% - ${offsetLeft});
        height:calc(100% - ${offsetTop});
        position:absolute;
        top:${offsetTop};
        left:${offsetLeft};
        bottom:0;
        right:0;
        pointer-events: none;
        z-index:${zIndex};
        background-position: 0 0;
        background-size:${gap[0] + width}px ${gap[1] + height}px;
        background-repeat: repeat;
        background-image:url(${base64Url});
      `;

      if (!watermarkDiv.current) {
        const div = document.createElement("div");
        watermarkDiv.current = div;
        // 挂载到container 设置style
        container.append(div);
        container.style.position = "relative";
      }

      watermarkDiv.current?.setAttribute("style", wmStyle.trim());

      if (container) {
        mutationObserver.current?.disconnect();

        // 创建完水印节点后，首先 disnonnect 去掉之前的 MutationObserver 的监听
        // 然后创建新的 MutationObserver 监听 container 的变动
        mutationObserver.current = new MutationObserver((mutations) => {
          const isChanged = mutations.some((mutation) => {
            let flag = false;
            // 判断水印是否删除是通过判断是否修改了watermark节点的属性,是否增删了watermark节点
            // 是得话就把 watermarkDiv.current 置空然后重新绘制
            if (mutation.removedNodes.length) {
              flag = Array.from(mutation.removedNodes).some(
                (node) => node === watermarkDiv.current
              );
            }
            if (
              mutation.type === "attributes" &&
              mutation.target === watermarkDiv.current
            ) {
              flag = true;
            }
            return flag;
          });
          if (isChanged) {
            watermarkDiv.current?.parentNode?.removeChild(watermarkDiv.current);
            watermarkDiv.current = undefined;
            drawWatermark();
          }
        });

        mutationObserver.current.observe(container, {
          attributes: true,
          subtree: true,
          childList: true,
        });
      }
    });
  }

  useEffect(() => {
    drawWatermark();
  }, [options]);

  // 调用返回的 generateWatermark 的时候设置 options 触发重绘
  // lodash merge方法合并参数
  return {
    generateWatermark: (newOptions: Partial<WatermarkOptions>) => {
      setOptions(merge({}, options, newOptions));
    },
  };
};
