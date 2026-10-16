'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import { Badge } from '@/components/ui/badge'
import { site } from '@/lib/site'

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="founder" ref={ref} className="py-12 md:py-20 px-6 md:px-12 lg:px-24 border-t border-[#1f1f1f] scroll-mt-16">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-8 md:mb-10"
        >
          <span className="text-xs font-mono text-[#888] tracking-widest uppercase">03 — Founder</span>
          <div className="flex-1 h-px bg-[#1f1f1f]" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="aspect-square max-w-sm rounded-2xl overflow-hidden relative">
              <Image
                src="/headshot.png"
                alt={`${site.founder.name}, founder of WaveCode`}
                fill
                className="object-cover object-top"
                priority
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-5"
          >
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              Founder-led,{' '}
              <span className="text-[#888]">by design.</span>
            </h2>
            <p className="text-[#aaa] leading-relaxed">
              WaveCode is run by {site.founder.name} ({site.founder.shortName}), a full stack
              engineer who has been taking web and mobile products from idea to production
              since 2021. He handles architecture, engineering, and product development himself,
              so clients work directly with the person writing their code.
            </p>
            <p className="text-[#aaa] leading-relaxed">
              His professional background includes senior engineering roles at BoomNation and
              Mallard Bay: leading an employee management platform that contributed to a $1.5M
              business contract, building notification and authentication systems on AWS,
              mentoring engineers, and managing App Store and Google Play releases.
            </p>
            <p className="text-[#aaa] leading-relaxed">
              He works natively in English and Spanish, and cares about clear communication and
              software that ships.
            </p>
            <a
              href={site.founder.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-[#aaa] hover:text-white transition-colors"
            >
              {site.founder.name} on LinkedIn
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M5 11L11 5M6 5h5v5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>

            <div className="flex flex-wrap gap-2 pt-2">
              {['TypeScript', 'React', 'React Native', 'Node.js', 'AWS', 'PostgreSQL'].map((tag) => (
                <Badge key={tag}>{tag}</Badge>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
