import { NextResponse } from "next/server";
import { APP_URL } from "../../../constants";

export async function GET(request: Request) {
  return NextResponse.json(
    {
        "accountAssociation": {
            "header": "eyJmaWQiOjE0NDA3MTYsInR5cGUiOiJjdXN0b2R5Iiwia2V5IjoiMHg4MzJlMjJFOEM0REQwNjZmNTdDMzA4N2NDNzcxNWExNzdiOTEyNEVmIn0",
            "payload": "eyJkb21haW4iOiJzaXdiLW5leHQtYXBwLXJvdXRlci1sZW1vbi52ZXJjZWwuYXBwIn0",
            "signature": "WnE1poIzOtGI1UPsYOASUGMmWnRBv2JU4x0g8AVpQB986jm3A8x6HC+pbyAuL3g0424RqlVRY2k6JywqcT4QIxw="
        },
        "miniapp": {
          "version": "1",
          "name": "SIWB Test Mini App",
          "homeUrl": APP_URL,
          "iconUrl": `${APP_URL}/icon.png`,
          "splashImageUrl": `${APP_URL}/icon.png`,
          "splashBackgroundColor": "#000000",
          "subtitle": "SIWB Test Mini App",
          "description": "SIWB Test App",
          "primaryCategory": 'utility',
          "tags": ["utility"],
          "heroImageUrl": `${APP_URL}/og.png`,
          "tagline": "SIWB Test Mini App",
          "ogTitle": "SIWB Test Mini App",
          "ogDescription": "SIWB Test Mini App",
          "ogImageUrl": `${APP_URL}/og.png`,
          "noindex": true
        }
    
  });
}

