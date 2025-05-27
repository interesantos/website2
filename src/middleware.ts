import { NextRequest, NextResponse } from 'next/server';

const locales = ['en', 'de', 'fr', 'es', 'it', 'ru', 'th'];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Check if path has valid locale
  const pathHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  // Redirect all requests without locale to default locale
  if (!pathHasLocale) {
    const locale = 'en'; // default locale
    return NextResponse.redirect(
      new URL(`/${locale}${pathname.startsWith('/') ? pathname : `/${pathname}`}`, request.url)
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|images/).*)'],
};