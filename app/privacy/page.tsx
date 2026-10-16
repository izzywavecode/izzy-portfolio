import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { products } from '@/lib/products'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Privacy policy',
  description: `How ${site.legalName} handles information on ${site.url.replace('https://', '')}.`,
  alternates: { canonical: '/privacy' },
}

const lastUpdated = 'October 16, 2026'

function PolicySection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="space-y-3">
      <h2 className="text-lg font-semibold text-white">{title}</h2>
      {children}
    </section>
  )
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Navbar />
      <article className="px-6 md:px-12 lg:px-24 pt-32 pb-16">
        <div className="max-w-2xl mx-auto space-y-10 text-[#aaa] leading-relaxed">
          <header className="space-y-3">
            <p className="text-xs font-mono text-[#888] tracking-widest uppercase">Legal</p>
            <h1 className="text-3xl md:text-4xl font-bold text-white">Privacy policy</h1>
            <p className="text-sm font-mono text-[#777]">Last updated {lastUpdated}</p>
          </header>

          <p>
            This policy covers the {site.name} website at {site.url.replace('https://', '')},
            operated by {site.legalName} in {site.location.label}. Each {site.name} product has
            its own privacy policy, linked below.
          </p>

          <PolicySection title="What this website collects">
            <p>
              This website has no accounts, forms, analytics, advertising, or tracking cookies, and
              it does not store anything in your browser. Its fonts and images are served from this
              site rather than from third parties.
            </p>
          </PolicySection>

          <PolicySection title="Hosting">
            <p>
              The site is hosted by Vercel. Like any web server, Vercel processes technical request
              data such as your IP address, browser type, and the pages requested, in order to
              deliver the site and protect it from abuse. See{' '}
              <a
                href="https://vercel.com/legal/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white underline underline-offset-4 decoration-[#444]"
              >
                Vercel&apos;s privacy policy
              </a>
              .
            </p>
          </PolicySection>

          <PolicySection title="When you email us">
            <p>
              If you write to {site.email}, we use your name, email address, and message only to
              reply and to work with you. We keep that correspondence for as long as it is needed
              for that purpose, and we do not sell or share it.
            </p>
          </PolicySection>

          <PolicySection title="Links to other sites">
            <p>
              This site links to LinkedIn and to {site.name} products. Those sites have their own
              privacy practices.
            </p>
            <ul className="space-y-1">
              {products.map((product) => (
                <li key={product.name}>
                  <a
                    href={product.privacyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white underline underline-offset-4 decoration-[#444]"
                  >
                    {product.name} privacy policy
                  </a>
                </li>
              ))}
            </ul>
          </PolicySection>

          <PolicySection title="Changes and contact">
            <p>
              If this policy changes, the date above will change with it. Questions about privacy
              can be sent to{' '}
              <a href={`mailto:${site.email}`} className="text-white underline underline-offset-4 decoration-[#444]">
                {site.email}
              </a>
              .
            </p>
          </PolicySection>
        </div>
      </article>
      <Footer />
    </main>
  )
}
