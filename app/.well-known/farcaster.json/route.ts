import { NextResponse } from "next/server";

export async function GET(request: Request) {
  return NextResponse.json(
    {
        "accountAssociation": {
            "header": "eyJmaWQiOjkxNTIsInR5cGUiOiJjdXN0b2R5Iiwia2V5IjoiMHgwMmVmNzkwRGQ3OTkzQTM1ZkQ4NDdDMDUzRURkQUU5NDBEMDU1NTk2In0",
            "payload": "eyJkb21haW4iOiJhcHAuZXhhbXBsZS5jb20ifQ",
            "signature": "MHgxMGQwZGU4ZGYwZDUwZTdmMGIxN2YxMTU2NDI1MjRmZTY0MTUyZGU4ZGU1MWU0MThiYjU4ZjVmZmQxYjRjNDBiNGVlZTRhNDcwNmVmNjhlMzQ0ZGQ5MDBkYmQyMmNlMmVlZGY5ZGQ0N2JlNWRmNzMwYzUxNjE4OWVjZDJjY2Y0MDFj"
          },
        "baseBuilder": {
          "ownerAddress": "0x..." 
        },
        "miniapp": {
          "version": "1",
          "name": "Test Mini App",
          "homeUrl": "https://test.com",
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
          "primaryCategory": "test",
          "tags": ["test"],
          "heroImageUrl": "https://test.com/og.png",
          "tagline": "Save instantly",
          "ogTitle": "Test Mini App",
          "ogDescription": "Test Mini App",
          "ogImageUrl": "https://test.com/og.png",
          "noindex": true
        }
    
  });
}