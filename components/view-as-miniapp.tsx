"use client";

import { Cuer } from "cuer";
import { useEffect, useState } from "react";

interface ViewAsMiniappProps {
  client?: "base";
}

export default function ViewAsMiniapp({ client = "base" }: ViewAsMiniappProps) {
  const [currentUrl, setCurrentUrl] = useState<string>("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentUrl(window.location.href);
    }
  }, []);

  const url = currentUrl || process.env.NEXT_PUBLIC_URL || 'https://siwb-next-app-router.vercel.app';

  const baseMiniappUrl = `cbwallet://miniapp?url=${encodeURIComponent(url)}`;

  return (
    <div>
      <Cuer value={baseMiniappUrl} />
    </div>
  );
}
