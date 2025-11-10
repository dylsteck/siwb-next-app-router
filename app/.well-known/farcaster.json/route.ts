import { NextResponse } from "next/server";

export async function GET(request: Request) {
  return NextResponse.json(
    {
        "accountAssociation": {
            "header": "eyJmaWQiOjE0NDA3MTYsInR5cGUiOiJjdXN0b2R5Iiwia2V5IjoiMHg4MzJlMjJFOEM0REQwNjZmNTdDMzA4N2NDNzcxNWExNzdiOTEyNEVmIn0",
            "payload": "eyJkb21haW4iOiJzaXdiLW5leHQtYXBwLXJvdXRlci1sZW1vbi52ZXJjZWwuYXBwIn0",
            "signature": "WnE1poIzOtGI1UPsYOASUGMmWnRBv2JU4x0g8AVpQB986jm3A8x6HC+pbyAuL3g0424RqlVRY2k6JywqcT4QIxw="
          },
        "baseBuilder": {
          "ownerAddress": "0x..." 
        },
        "miniapp": {
          "version": "1",
          "name": "Test Mini App",
          "homeUrl": "https://siwb-next-app-router-lemon.vercel.app",
          "iconUrl": "https://test.com/i.png",
          "splashImageUrl": "https://test.com/l.png",
          "splashBackgroundColor": "#000000",
          "webhookUrl": "https://test.com/api/webhook",
          "subtitle": "Easy to manage",
          "description": "Test Mini App",
          "screenshotUrls": [
            "https://test.com/s1.png",
            "https://test.com/s2.png",
            "https://test.com/s3.png"
          ],
          "primaryCategory": 'utility',
          "tags": ["utility"],
          "heroImageUrl": "https://test.com/og.png",
          "tagline": "Save instantly",
          "ogTitle": "Test Mini App",
          "ogDescription": "Test Mini App",
          "ogImageUrl": "https://test.com/og.png",
          "noindex": true
        }
    
  });
}

