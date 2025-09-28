import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "siwf-next-app-router",
  description: "Sign In with Farcaster x Next.js App Router x NextAuth Demo",
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