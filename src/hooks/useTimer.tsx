/*
 * @Author: leilei405 1601178425@qq.com
 * @Date: 2024-09-29 00:07:44
 * @LastEditors: leilei405 1601178425@qq.com
 * @LastEditTime: 2024-09-29 00:08:29
 * @FilePath: \lucky-design\src\hooks\useTimer.tsx
 */
import { useEffect, useRef } from "react";

export interface UseTimerProps {
  id: number;
  duration?: number;
  remove: (id: number) => void;
}

export function useTimer(props: UseTimerProps) {
  const { remove, id, duration = 2000 } = props;

  const timer = useRef<number | null>(null);

  const startTimer = () => {
    timer.current = window.setTimeout(() => {
      remove(id);
      removeTimer();
    }, duration);
  };

  const removeTimer = () => {
    if (timer.current) {
      clearTimeout(timer.current);
      timer.current = null;
    }
  };

  useEffect(() => {
    startTimer();
    return () => removeTimer();
  }, []);

  const onMouseEnter = () => {
    removeTimer();
  };

  const onMouseLeave = () => {
    startTimer();
  };

  return {
    onMouseEnter,
    onMouseLeave,
  };
}
