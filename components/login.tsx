"use client";

import Head from "next/head";
import { useSession, signIn, signOut, getCsrfToken } from "next-auth/react";
import { useCallback, useState, useEffect } from "react";
import { SignInWithBaseButton } from "@base-org/account-ui/react";
import { useAccount, useConnect, useSignMessage } from "wagmi";
import { useMiniAppContext } from "./mini-app-provider";
import ViewAsMiniApp from "./view-as-miniapp";
import { SharedContent } from "./shared-content";
import { SiweMessage } from "siwe";

export default function Login() {
  return (
    <>
      <Head>
        <title>Sign In with Base x Next Auth</title>
      </Head>
      <main style={{ fontFamily: "Inter, sans-serif" }}>
        <Content />
      </main>
    </>
  );
}

function Content() {
  const [error, setError] = useState(false);
  const { address, isConnected } = useAccount();
  const { connectAsync, connectors } = useConnect();
  const { signMessageAsync } = useSignMessage();
  const { isInMiniApp } = useMiniAppContext();

  const getNonce = useCallback(async () => {
    const nonce = await getCsrfToken();
    if (!nonce) throw new Error("Unable to generate nonce");
    return nonce;
  }, []);

  const handleSignInWithBase = async () => {
    try {
      const nonce = crypto.randomUUID().replace(/-/g, '');
      
      let walletAddress = address;

      if (!isConnected || !walletAddress) {
        const connector = isInMiniApp 
          ? connectors.find(c => c.id === 'farcasterMiniApp') || connectors[0]
          : connectors.find(c => c.id === 'baseAccount') || connectors[1];
        const result = await connectAsync({ connector });
        walletAddress = result.accounts[0];
      }

      const siweMessage = new SiweMessage({
        domain: window.location.host,
        address: walletAddress,
        statement: "Sign in with Ethereum to the app.",
        uri: window.location.origin,
        version: "1",
        chainId: 8453, // Base mainnet
        nonce: nonce,
      });

      const messageToSign = siweMessage.prepareMessage();
      
      const signature = await signMessageAsync({
        message: messageToSign,
      });

      await signIn("base", {
        address: walletAddress,
        message: messageToSign,
        signature,
        nonce,
        redirect: false,
      });
    } catch (err) {
      setError(true);
    }
  };

  return (
    <div>
      <div style={{
        position: "fixed",
        top: "20px",
        right: "20px",
        zIndex: 1000
      }}>
        <ProfileSignInButton 
          onSignIn={handleSignInWithBase}
          error={error}
        />
      </div>
      <div style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        minHeight: "100vh",
        textAlign: "center",
        maxWidth: "800px",
        margin: "0 auto",
        padding: "120px 32px 32px 32px"
      }}>
        <div style={{ marginBottom: "16px" }}>
          <SharedContent />
        </div>
        <div style={{ marginBottom: "16px" }}>
          <Profile />
        </div>
        {!isInMiniApp && (
          <div style={{ marginTop: "20px" }}>
            <h3 style={{ marginBottom: "16px" }}>Test on Base</h3>
            <ViewAsMiniApp />
          </div>
        )}
      </div>
    </div>
  );
}

function Profile() {
  const { data: session, status } = useSession();

  if (status === "loading") return null;

  return session ? (
    <div style={{ fontFamily: "sans-serif", color: 'black' }}>
      <p style={{ marginBottom: "20px", fontSize: "16px", wordBreak: "break-word", maxWidth: "100%", padding: "0 16px" }}>
        Signed in as {session.user?.name || session.user?.email || 'User'}
      </p>
      <p>
        <button
          type="button"
          style={{
            padding: "10px 20px",
            cursor: "pointer",
            borderRadius: "8px",
            border: "1px solid #d1d5db",
            backgroundColor: "#fff",
            fontSize: "14px",
            fontWeight: "500",
            transition: "all 0.2s ease",
          }}
          onClick={() => signOut()}
        >
          Sign out
        </button>
      </p>
    </div>
  ) : null;
}

function ProfileSignInButton({ onSignIn, error }: { onSignIn: () => void; error: boolean }) {
  const { data: session, status } = useSession();
  const { isInMiniApp } = useMiniAppContext();

  if (status === "loading") return null;

  return !session ? (
    <div>
      <SignInWithBaseButton
          align="center"
          variant="solid"
          colorScheme="light"
          onClick={onSignIn}
      />
      {error && (
        <div>
          Unable to sign in at this time.
        </div>
      )}
    </div>
  ) : null;
}