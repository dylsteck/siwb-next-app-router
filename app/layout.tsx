import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "siwb-next-app-router",
  description: "Sign In with Base x Next.js App Router x NextAuth Demo",
  other: {
    "fc:miniapp": JSON.stringify({
      version: "1",
      imageUrl: "https://siwb-next-app-router-lemon.vercel.app/og.png",
      button: {
        title: "Open App",
        action: {
          type: "launch_miniapp",
          name: "Open",
          url: "https://siwb-next-app-router-lemon.vercel.app",
          splashImageUrl: "https://siwb-next-app-router-lemon.vercel.app/og.png",
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