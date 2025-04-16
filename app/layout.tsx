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
    <html lang="en">
      <body>
          {children}
      </body>
    </html>
  );
}