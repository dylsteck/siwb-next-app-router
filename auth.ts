import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { createPublicClient, http } from 'viem';
import { base } from 'viem/chains';

const client = createPublicClient({ 
  chain: base, 
  transport: http() 
});

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    CredentialsProvider({
      id: "base",
      name: "Sign in with Base",
      credentials: {
        address: { label: "Address", type: "text" },
        message: { label: "Message", type: "text" },
        signature: { label: "Signature", type: "text" },
        nonce: { label: "Nonce", type: "text" },
      },
      async authorize(credentials) {
        try {
          if (!credentials?.address || !credentials?.message || !credentials?.signature || !credentials?.nonce) {
            return null;
          }

          const address = String(credentials.address);
          const message = String(credentials.message);
          const signature = String(credentials.signature);

          if (!/^0x[a-fA-F0-9]{40}$/.test(address)) {
            return null;
          }

          const isValid = await client.verifyMessage({
            address: address as `0x${string}`,
            message,
            signature: signature as `0x${string}`,
          });

          if (!isValid) {
            return null;
          }

          return {
            id: address,
            name: address,
            image: null,
          };
        } catch (error) {
          return null;
        }
      },
    }),
  ],
});