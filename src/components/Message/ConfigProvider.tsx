import { PropsWithChildren, RefObject, createContext, useRef } from "react";
import { MessageProvider } from "./message";
import { IMessageRef } from "./type";

interface ConfigProviderProps {
  messageRef?: RefObject<IMessageRef>;
}

export const ConfigContext = createContext<ConfigProviderProps>({});

export function ConfigProvider(props: PropsWithChildren) {
  const { children } = props;

  const messageRef = useRef<IMessageRef>(null);

  return (
    <ConfigContext.Provider value={{ messageRef }}>
      <MessageProvider ref={messageRef}></MessageProvider>
      {children}
    </ConfigContext.Provider>
  );
}
