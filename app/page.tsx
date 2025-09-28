import Login from "@/components/login"
import { auth } from "@/auth"
import { SessionProvider } from "next-auth/react"
import MiniAppProvider from "@/components/mini-app-provider"
import { WagmiProvider } from "@/components/wagmi-provider"

export default async function ClientPage() {
  const session = await auth()
  if (session?.user) {
    session.user = {
      id: session.user.id,
      name: session.user.name,
      image: session.user.image,
    }
  }

  return (
    <SessionProvider basePath={"/api/auth"} session={session}>
      <WagmiProvider>
        <MiniAppProvider>
          <Login />
        </MiniAppProvider>
      </WagmiProvider>
    </SessionProvider>
  )
}