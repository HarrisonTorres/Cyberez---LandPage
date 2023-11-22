import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Cyberez - Cyber Security',
  description: 'Site para segurança cibernica',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt">
      <body>{children}</body>
    </html>
  )
}
