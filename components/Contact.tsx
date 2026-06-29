'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="contact" ref={ref} className="py-12 md:py-20 px-6 md:px-12 lg:px-24 border-t border-[#1f1f1f]">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-mono text-[#888] tracking-widest uppercase">05 — Contact</span>

          <h2 className="text-3xl md:text-5xl font-bold mt-6 mb-4 md:mb-6 leading-tight">
            Let&apos;s build something{' '}
            <span className="text-[#888]">together.</span>
          </h2>

          <p className="text-[#aaa] text-base md:text-lg leading-relaxed mb-8 md:mb-12 max-w-xl mx-auto">
            I&apos;m currently open to new roles. Whether you have a position in mind
            or just want to chat, my inbox is open.
          </p>

          <motion.a
            href="mailto:izzy@wavecode.dev"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-3 bg-white text-black font-semibold px-6 md:px-8 py-3 md:py-4 rounded-xl text-base md:text-lg hover:bg-[#e8e8e8] transition-colors"
          >
            izzy@wavecode.dev
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M4 10h12M12 6l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.a>

          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 mt-10 md:mt-16">
            <a
              href="https://www.linkedin.com/in/israel-romero-917a54219/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[#888] hover:text-white transition-colors flex items-center gap-2"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn
            </a>
            <span className="w-px h-4 bg-[#1f1f1f]" />
            <a
              href="tel:+19192628912"
              className="text-sm text-[#888] hover:text-white transition-colors"
            >
              (919) 262-8912
            </a>
            <span className="w-px h-4 bg-[#1f1f1f]" />
            <a
              href="/Israel_Romero_Resume_2026.pdf"
              download
              className="text-sm text-[#888] hover:text-white transition-colors flex items-center gap-1.5"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M7 2v7M4 7l3 3 3-3M2 12h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Resume PDF
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-16 md:mt-24 pt-8 border-t border-[#1f1f1f] flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#777] font-mono max-w-5xl mx-auto"
      >
        <span>© {new Date().getFullYear()} Israel Romero</span>
        <span>wavecode.dev</span>
      </motion.div>
    </section>
  )
}
