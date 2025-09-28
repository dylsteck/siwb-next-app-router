"use client";

import { useSession, signOut } from "next-auth/react";

export default function LoggedIn() {
  const { data: session } = useSession();

  if (!session) {
    return null;
  }

  return (
    <div>
      <div style={{ position: "fixed", top: "12px", right: "12px" }}>
        <button
          type="button"
          style={{ padding: "6px 12px", cursor: "pointer" }}
          onClick={() => signOut()}
        >
          Sign Out
        </button>
      </div>
      <div style={{ paddingTop: "33vh", textAlign: "center" }}>
        <h1>@farcaster/auth-kit + NextAuth</h1>
        <p>
          This example app shows how to use{" "}
          <a
            href="https://docs.farcaster.xyz/auth-kit/introduction"
            target="_blank" rel="noreferrer"
          >
            Farcaster AuthKit
          </a>{" "}
          and{" "}
          <a href="https://next-auth.js.org/" target="_blank" rel="noreferrer">
            NextAuth.js
          </a>
          .
        </p>
        <div style={{ fontFamily: "sans-serif", color: 'black' }}>
          <p>Signed in as {session.user?.name}</p>
          <p>
            <button
              type="button"
              style={{ padding: "6px 12px", cursor: "pointer" }}
              onClick={() => signOut()}
            >
              Click here to sign out
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
