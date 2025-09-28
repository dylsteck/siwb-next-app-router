'use client'

import { sdk } from "@farcaster/miniapp-sdk";
import type { Context } from "@farcaster/miniapp-sdk";
import React, { createContext, useState, useContext, useMemo } from "react";

interface MiniAppContextType {
  context: Context.MiniAppContext | undefined;
  ready: boolean;
  getCapabilities: () => Promise<string[]>;
  isInMiniApp: boolean;
}

const MiniAppContext = createContext<MiniAppContextType | undefined>(undefined);

export function useMiniAppContext() {
  const context = useContext(MiniAppContext);
  if (context === undefined) {
    throw new Error('useMiniAppContext must be used within a MiniAppProvider');
  }
  return context;
}

export default function MiniAppProvider({ children }: { children: React.ReactNode }){
    const [context, setContext] = useState<Context.MiniAppContext | undefined>(undefined);
    const [ready, setReady] = useState<boolean>(false);
    const [isInMiniApp, setIsInMiniApp] = useState<boolean>(false);

    React.useEffect(() => {
        const init = async () => {
          const isMiniApp = await sdk.isInMiniApp();
          setIsInMiniApp(isMiniApp);
          
          if (isMiniApp) {
            const sdkContext = await sdk.context;
            setContext(sdkContext);

            setTimeout(() => {
              sdk.actions.ready();
              setReady(true);
            }, 500);
          } else {
            setReady(true);
          }
        }
        init()
      }, [])

    const getCapabilities = async () => {
      return await sdk.getCapabilities();
    };

    const value = useMemo(() => ({
      context,
      ready,
      getCapabilities,
      isInMiniApp
    }), [context, ready, isInMiniApp]);

    return(
        <MiniAppContext.Provider value={value}>
         {children}
        </MiniAppContext.Provider>
    )
}