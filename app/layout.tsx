import type { Metadata } from 'next'
import { Geist_Mono, Manrope } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://allantech.co.tz'),
  title: {
    default: 'Alanmox | Software Innovator',
    template: '%s | Alanmox',
  },
  description:
    'Portfolio of Alanmox, a full-stack software innovator building modern web products for local businesses, freelancers, and remote teams.',
  icons: {
    icon: '/alanmoxlogo.jpeg',
    apple: '/alanmoxlogo.jpeg',
  },
  openGraph: {
    title: 'Alanmox | Software Innovator',
    description:
      'Portfolio of Alanmox, a full-stack software innovator building modern web products for local businesses, freelancers, and remote teams.',
    url: 'https://allantech.co.tz',
    siteName: 'Alanmox',
    images: [
      {
        url: '/alanmoxlogo.jpeg',
        width: 800,
        height: 800,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alanmox | Software Innovator',
    description:
      'Portfolio of Alanmox, a full-stack software innovator building modern web products for local businesses, freelancers, and remote teams.',
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: 'EUPUyDd_8AaWSr259zMhQWlLi890lojA_r2hxKNPKS8',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${manrope.variable} ${geistMono.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
