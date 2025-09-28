import '@/styles/tailwind.css'
import type { Metadata } from 'next'
import { ToastProvider } from '@/components/toast-provider'
import { CookieManager } from '@/components/cookies/cookie-manager'

export const metadata: Metadata = {
  title: {
    template: '%s - Radiant',
    default: 'Radiant - Close every deal',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/css?f%5B%5D=switzer@400,500,600,700&amp;display=swap"
        />
        <link
          rel="alternate"
          type="application/rss+xml"
          title="Social Capital Website"
          href="/blog/feed.xml"
        />
      </head>
      <body className="text-white antialiased bg-[#171719]">
        <ToastProvider>
          {children}
          <CookieManager />
        </ToastProvider>
      </body>
    </html>
  )
}