// middleware.js

import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';

// Middleware to protect dashboard route
export function middleware(req) {
  // Get the authentication token from the request (either cookies or headers)
  const token = req.cookies.get('auth_token');

  // Define the protected dashboard route
  const dashboardPath = '/dashboard';

  // If the user is not authenticated (token does not exist), redirect to login page
  if (!token && req.nextUrl.pathname.startsWith(dashboardPath)) {
    // Redirect to login page
    return NextResponse.redirect(new URL('/login', req.url));
  }

  // If authenticated or visiting non-protected page, proceed
  return NextResponse.next();
}

// Optional: Specify which paths the middleware should apply to
export const config = {
  matcher: ['/dashboard', '/login', '/about', 'contact', '/projects'], // Protected routes
};
