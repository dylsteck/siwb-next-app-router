"use client";

import { APP_DOMAIN, APP_URL } from "@/constants";
import { Cuer } from "cuer";

export default function ViewAsMiniApp() {

  const appUrl = APP_URL ?? `https://${APP_DOMAIN}`;
  const baseMiniAppUrl = `cbwallet://miniapp?url=${encodeURIComponent(appUrl)}`;

  return (
    <div>
      {/* renders a QR code to test the page as a mini app in Base */}
      <Cuer value={baseMiniAppUrl} />
    </div>
  );
}
