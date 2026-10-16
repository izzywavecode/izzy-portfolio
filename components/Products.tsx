'use client'

import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'
import { LogoMark } from '@/components/Logo'
import { products, type Product } from '@/lib/products'

function ProductScreens({ screenshots }: { screenshots: Product['screenshots'] }) {
  return (
    <div className="relative flex justify-center items-start gap-4 sm:gap-6 pt-2">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(circle at 50% 40%, rgba(255,255,255,0.05) 0%, transparent 60%)' }}
      />
      {screenshots.map((screenshot, index) => (
        <div
          key={screenshot.src}
          className={`relative w-[44%] max-w-[220px] aspect-[598/1300] rounded-[1.75rem] overflow-hidden border border-[#2a2a2a] shadow-2xl shadow-black/60 ${
            index % 2 === 1 ? 'mt-12' : ''
          }`}
        >
          <Image src={screenshot.src} alt={screenshot.alt} fill sizes="220px" className="object-cover" />
        </div>
      ))}
    </div>
  )
}

function ProductShowcase({ product, inView }: { product: Product; inView: boolean }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="border border-[#1f1f1f] rounded-2xl overflow-hidden bg-[#0d0d0d]"
    >
      <div className="grid lg:grid-cols-[1.1fr_1fr] gap-10 p-6 md:p-10">
        <div className="min-w-0">
          <div className="flex items-center gap-3 mb-6">
            <LogoMark size={28} />
            <h3 className="text-xl font-semibold">{product.name}</h3>
          </div>

          <p
            className="text-3xl md:text-4xl font-black uppercase leading-[0.95] tracking-tight mb-6"
            style={{ fontStretch: '75%' }}
          >
            {product.tagline}
          </p>

          <p className="text-sm font-mono text-[#888] mb-4">{product.audience}</p>
          <p className="text-[#aaa] leading-relaxed mb-2">{product.problem}</p>
          <p className="text-[#ddd] leading-relaxed mb-8">{product.solution}</p>

          <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-5 mb-8">
            {product.features.map((feature) => (
              <li key={feature.title} className="flex gap-3">
                <span className="mt-1.5 h-2 w-3.5 flex-shrink-0 rounded-sm bg-[#3EE07C] shadow-[0_0_8px_#3EE07C80]" />
                <span>
                  <span className="block text-sm font-semibold mb-1">{feature.title}</span>
                  <span className="block text-sm text-[#999] leading-relaxed">{feature.description}</span>
                </span>
              </li>
            ))}
          </ul>

          <p className="text-xs font-mono text-[#888] mb-6">{product.availability}</p>

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={product.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white text-black font-medium px-6 py-3 rounded-lg hover:bg-[#e0e0e0] transition-colors text-sm"
            >
              Open {product.name}
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M5 11L11 5M6 5h5v5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href={product.privacyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center border border-[#333] text-[#aaa] hover:text-white hover:border-[#555] px-6 py-3 rounded-lg transition-colors text-sm"
            >
              Privacy policy
            </a>
          </div>
        </div>

        <ProductScreens screenshots={product.screenshots} />
      </div>
    </motion.article>
  )
}

export default function Products() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="products" ref={ref} className="py-12 md:py-20 px-6 md:px-12 lg:px-24 border-t border-[#1f1f1f] scroll-mt-16">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-8 md:mb-10"
        >
          <span className="text-xs font-mono text-[#888] tracking-widest uppercase">02 — Products</span>
          <div className="flex-1 h-px bg-[#1f1f1f]" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-2xl mb-10 md:mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
            We build our own{' '}
            <span className="text-[#888]">products, too.</span>
          </h2>
          <p className="text-[#aaa] leading-relaxed">
            Alongside client work, WaveCode designs, builds, and operates software under its own
            name. WaveCode Studio is the first.
          </p>
        </motion.div>

        <div className="space-y-6">
          {products.map((product) => (
            <ProductShowcase key={product.name} product={product} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  )
}
