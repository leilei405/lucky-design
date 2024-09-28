import React, { useMemo, forwardRef } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { createPortal } from "react-dom";
import { IMessageRef, Position } from "./type";
import { useStore } from "./hooks";
import { MessageItem } from "./message-item";

export const MessageProvider = forwardRef<IMessageRef, {}>((props, ref) => {
  const { messageList, add, remove, update, clearAll } = useStore("top");
  const positions = Object.keys(messageList) as Position[];

  if (ref && "current" in ref!) {
    ref.current = {
      add,
      update,
      remove,
      clearAll,
    };
  }

  // const el = useMemo(() => {
  //   const el = document.createElement("div");
  //   el.className = `wrapper`;

  //   document.body.appendChild(el);
  //   return el;
  // }, []);

  return (
    <div className="message-wrapper">
      {positions.map((direction) => {
        return (
          <TransitionGroup
            className={`message-wrapper-${direction}`}
            key={direction}
          >
            {messageList[direction].map((item) => {
              return (
                <CSSTransition
                  key={item.id}
                  timeout={1000}
                  classNames="message"
                >
                  <MessageItem onClose={remove} {...item}></MessageItem>
                </CSSTransition>
              );
            })}
          </TransitionGroup>
        );
      })}
    </div>
  );

  // return createPortal(messageWrapper, el);
});
