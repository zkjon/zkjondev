import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Jon Imanol Ruiz Hermoso - Desarrollador Full-Stack',
  description: 'Portfolio profesional de Jon Imanol Ruiz Hermoso, Desarrollador Full-Stack especializado en frameworks de frontend modernos, creación de MCP Servers e IA-First.',
  keywords: 'Desarrollador Full-Stack, React, Next.js, TypeScript, JavaScript, Portfolio',
  authors: [{ name: 'Jon Imanol Ruiz Hermoso' }],
  creator: 'Jon Imanol Ruiz Hermoso',
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://zkjon.github.io/zkjondev',
    title: 'Jon Imanol Ruiz Hermoso - Desarrollador Full-Stack',
    description: 'Portfolio profesional de Jon Imanol Ruiz Hermoso',
    siteName: 'Jon Imanol Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jon Imanol Ruiz Hermoso - Desarrollador Full-Stack',
    description: 'Portfolio profesional de Jon Imanol Ruiz Hermoso',
    creator: '@zkjondev',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
