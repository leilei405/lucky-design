/*
 * @Author: leilei405 1601178425@qq.com
 * @Date: 2024-10-12 23:42:52
 * @LastEditors: leilei405 1601178425@qq.com
 * @LastEditTime: 2024-10-12 23:48:38
 * @FilePath: \lucky-design\src\components\Popover\popver.tsx
 */
import { useInteractions, useFloating, useHover } from "@floating-ui/react";
import { useState } from "react";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  const { refs, floatingStyles, context } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
  });

  const hover = useHover(context);

  const { getReferenceProps, getFloatingProps } = useInteractions([hover]);

  return (
    <>
      <button ref={refs.setReference} {...getReferenceProps()}>
        hello
      </button>
      {isOpen && (
        <div
          ref={refs.setFloating}
          style={floatingStyles}
          {...getFloatingProps()}
        >
          冯雷雷
        </div>
      )}
    </>
  );
}
