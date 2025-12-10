import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  
  // Check if there's already a locale in the path
  const pathnameHasLocale = ['pt', 'en'].some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  // If locale exists, continue
  if (pathnameHasLocale) return NextResponse.next();

  // Only redirect root path or paths without locale
  if (pathname === '/' || !pathname.startsWith('/_next')) {
    // Get locale from cookie or browser
    const cookieLocale = request.cookies.get('NEXT_LOCALE')?.value;
    const browserLang = request.headers.get('accept-language')?.split(',')[0]?.split('-')[0];
    const locale = cookieLocale || browserLang || 'pt';

    // Default to 'pt' if locale is not supported
    const supportedLocale = ['pt', 'en'].includes(locale) ? locale : 'pt';

    // Redirect to locale-prefixed URL
    const newUrl = new URL(`/${supportedLocale}${pathname}`, request.url);
    return NextResponse.redirect(newUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // Skip all internal paths (_next, api, static files)
    '/((?!_next|api|favicon.ico|.*\\..*|sitemap|robots).*)',
  ],
};

