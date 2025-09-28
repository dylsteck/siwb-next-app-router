"use client";

import { useSession, signOut } from "next-auth/react";
import { SharedContent } from "./shared-content";

export default function LoggedIn() {
  const { data: session } = useSession();

  if (!session) {
    return null;
  }

  return (
    <div>
      <div style={{ paddingTop: "33vh", textAlign: "center" }}>
        <SharedContent />
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
