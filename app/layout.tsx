import type { Metadata } from "next";
import { APP_URL } from "../constants";


export const metadata: Metadata = {
  title: "siwb-next-app-router",
  description: "Sign In with Base x Next.js App Router x NextAuth Demo",
  other: {
    "fc:miniapp": JSON.stringify({
      version: "1",
      imageUrl: `${APP_URL}/og.png`,
      button: {
        title: "Open App",
        action: {
          type: "launch_miniapp",
          name: "Open",
          url: APP_URL,
          splashImageUrl: `${APP_URL}/og.png`,
          splashBackgroundColor: "#f5f0ec"
        }
      }
    }),
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement {
  return (
    <html lang="en" style={{ backgroundColor: '#ffffff' }}>
      <body 
        style={{ 
          backgroundColor: '#ffffff', 
          color: '#000000',
          margin: 0,
          padding: 0,
          minHeight: '100vh'
        }}
      >
        {children}
      </body>
    </html>
  );
}