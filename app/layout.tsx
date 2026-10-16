import type { Metadata } from 'next'
import { Archivo, IBM_Plex_Mono } from 'next/font/google'
import { site } from '@/lib/site'
import './globals.css'

// The WaveCode Studio app's typefaces; next/font self-hosts them at build time.
const archivo = Archivo({ subsets: ['latin'], axes: ['wdth'], variable: '--font-sans', display: 'swap' })
const plexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
  display: 'swap',
})

const title = 'WaveCode — Software development studio in Puerto Rico'

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: title, template: `%s — ${site.name}` },
  description: site.description,
  keywords: [
    'software development studio',
    'web application development',
    'mobile app development',
    'React Native',
    'Puerto Rico',
    'WaveCode Studio',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    title,
    description: site.description,
    url: '/',
    siteName: site.name,
    locale: 'en_US',
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title, description: site.description },
}

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: site.name,
  legalName: site.legalName,
  url: site.url,
  logo: `${site.url}/icon.svg`,
  email: site.email,
  description: site.description,
  founder: { '@type': 'Person', name: site.founder.name, sameAs: [site.founder.linkedIn] },
  address: {
    '@type': 'PostalAddress',
    addressLocality: site.location.city,
    addressRegion: site.location.region,
    addressCountry: site.location.country,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`dark ${archivo.variable} ${plexMono.variable}`}>
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </body>
    </html>
  )
}
