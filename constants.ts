
// Determine app URL based on Vercel system environment variables
export const APP_URL = process.env.VERCEL_ENV === 'production' 
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL || 'siwb-next-app-router.vercel.app'}`
  : process.env.VERCEL_URL 
    ? `https://${process.env.VERCEL_URL}`
    : 'http://localhost:3000';

export const APP_DOMAIN = "siwb-next-app-router.vercel.app";