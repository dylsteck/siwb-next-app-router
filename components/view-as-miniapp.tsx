"use client";

import { APP_URL } from "@/constants";
import { Cuer } from "cuer";

export default function ViewAsMiniApp() {

  const baseMiniAppUrl = `cbwallet://miniapp?url=${encodeURIComponent(APP_URL)}`;

  return (
    <div>
      {/* renders a QR code to test the page as a mini app in Base */}
      <Cuer value={baseMiniAppUrl} />
    </div>
  );
}
