import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Israel Romero — Senior Full Stack Engineer',
  description: 'Senior Full Stack Software Engineer specializing in React, React Native, Node.js, and AWS. 4+ years building production web and mobile apps.',
  keywords: ['software engineer', 'full stack', 'react', 'react native', 'node.js', 'typescript'],
  openGraph: {
    title: 'Israel Romero — Senior Full Stack Engineer',
    description: 'Senior Full Stack Software Engineer specializing in React, React Native, Node.js, and AWS.',
    url: 'https://wavecode.dev',
    siteName: 'wavecode.dev',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body>{children}</body>
    </html>
  )
}
