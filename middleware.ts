import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const locales = ['es', 'en']
const defaultLocale = 'es'

function getLocale(request: NextRequest): string {
  // Verificar si ya tiene un locale en la URL
  const pathname = request.nextUrl.pathname
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  if (pathnameHasLocale) return pathname.split('/')[1]

  // Obtener el locale preferido del header Accept-Language
  const acceptLanguage = request.headers.get('accept-language')
  if (acceptLanguage) {
    const preferredLocale = acceptLanguage
      .split(',')[0]
      .split('-')[0]
      .toLowerCase()
    
    if (locales.includes(preferredLocale)) {
      return preferredLocale
    }
  }

  return defaultLocale
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  // Verificar si la ruta ya tiene un locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  if (pathnameHasLocale) return

  // Redirect si está en la raíz
  if (pathname === '/') {
    const locale = getLocale(request)
    return NextResponse.redirect(new URL(`/${locale}`, request.url))
  }

  // Para otras rutas, agregar el locale por defecto
  const locale = getLocale(request)
  return NextResponse.redirect(new URL(`/${locale}${pathname}`, request.url))
}

export const config = {
  matcher: [
    // Excluir archivos internos de Next.js y archivos estáticos
    '/((?!_next/static|_next/image|favicon.ico|.*\\.png$|.*\\.jpg$|.*\\.svg$).*)',
  ],
}
