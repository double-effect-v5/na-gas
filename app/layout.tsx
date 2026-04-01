import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'NA-GAS.BG — Газови Инжекциони, Монтаж и LPG Сервиз в София',
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
  description:
    'Професионален монтаж на газови инжекциони за директно и индиректно впръскване. Сертифицирани компоненти, гаранция 5 години, лизинг без лихва. LPG сервиз в София.',
  keywords:
    'газови инжекциони, LPG сервиз София, монтаж газова уредба, директно впръскване, узаконяване газова уредба, Romano, KME, AC STAG, NA-GAS',
  openGraph: {
    title: 'NA-GAS.BG — Газови Инжекциони и LPG Сервиз',
    description:
      'Монтаж на газови инжекциони от последно поколение. Директно и индиректно впръскване. Гаранция, лизинг, узаконяване.',
    type: 'website',
    locale: 'bg_BG',
    url: 'https://na-gas.bg',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="bg" className={inter.variable}>
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
