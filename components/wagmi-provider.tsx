"use client";

import { createConfig, http, WagmiProvider as WagmiRootProvider } from "wagmi";
import { base } from "wagmi/chains";
import { baseAccount, injected } from "wagmi/connectors";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { farcasterMiniApp } from "@farcaster/miniapp-wagmi-connector";
import { useMemo, useState } from "react";

export function WagmiProvider({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000,
        retry: 1,
      },
    },
  }));

  const config = useMemo(() => createConfig({
    chains: [base],
    transports: {
      [base.id]: http('https://mainnet.base.org', {
        retryCount: 3,
        retryDelay: 1000,
      })
    },
    connectors: [
      farcasterMiniApp(), 
      baseAccount({
        appName: "Sign In with Base x Next.js App Router x NextAuth Demo",
        appLogoUrl: "https://i.imgur.com/pQ5OxRP.png",
      }),
      injected()
    ],
    ssr: true,
  }), []);

  return (
    <WagmiRootProvider config={config}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiRootProvider>
  );
}