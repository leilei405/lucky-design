import React, {
  Children,
  FC,
  Fragment,
  PropsWithChildren,
  useContext,
  useMemo,
} from "react";
import classnames from "classnames";
import {
  SpaceProps,
  SizeType,
  spaceSize,
  otherStyles,
  ConfigContext,
  ConfigContextType,
} from "./types";

interface ConfigProviderProps extends PropsWithChildren<ConfigContextType> {}

export function ConfigProvider(props: ConfigProviderProps) {
  const { space, children } = props;

  return (
    <ConfigContext.Provider value={{ space }}>
      {children}
    </ConfigContext.Provider>
  );
}

const getNumberSize = (size: SizeType) => {
  return typeof size === "string" ? spaceSize[size] : size || 0;
};

const Space: FC<SpaceProps> = (props) => {
  const { space } = useContext(ConfigContext);
  const {
    className,
    style,
    children,
    size = space?.size || "small",
    direction = "horizontal",
    wrap = false,
    align,
    split,
    ...otherProps
  } = props || {};

  // 通过Children平铺元素
  const childNodes = Children.toArray(props.children);

  const mergedAlign =
    direction === "horizontal" && align === undefined ? "center" : align;

  const classes = classnames(
    "space",
    `space-${direction}`,
    {
      [`space-align-${mergedAlign}`]: mergedAlign,
    },
    className
  );

  const nodes = childNodes.map((child: any, i) => {
    const key = (child && child.key) || `space-item-${i}`;
    return (
      <Fragment key={i}>
        <div className="space-item" key={key}>
          {child}
        </div>
        {i < childNodes.length && split && (
          <span className={`${className}-split`} style={style}>
            {split}
          </span>
        )}
      </Fragment>
    );
  });

  const [horizontalSize, verticalSize] = useMemo(
    () =>
      ((Array.isArray(size) ? size : [size, size]) as [SizeType, SizeType]).map(
        (item) => getNumberSize(item)
      ),
    [size]
  );

  otherStyles.columnGap = horizontalSize;
  otherStyles.rowGap = verticalSize;

  if (wrap) {
    otherStyles.flexWrap = "wrap";
  }

  return (
    <div
      className={classes}
      style={{ ...otherStyles, ...style }}
      {...otherProps}
    >
      {nodes}
    </div>
  );
};

export default Space;
