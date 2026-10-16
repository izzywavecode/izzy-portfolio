'use client'

import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { Logo } from '@/components/Logo'
import { projectInquiryHref } from '@/lib/site'

// Root-relative so the links also work from /privacy.
const navLinks = [
  { href: '/#services', label: 'Services' },
  { href: '/#products', label: 'Products' },
  { href: '/#founder', label: 'Founder' },
  { href: '/#contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (y) => {
    setScrolled(y > 40)
  })

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || menuOpen
            ? 'bg-[#0a0a0a]/95 backdrop-blur-md border-b border-[#1f1f1f]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 h-16 flex items-center justify-between">
          <a href="/" aria-label="WaveCode home" className="hover:opacity-80 transition-opacity">
            <Logo />
          </a>

          <nav aria-label="Main" className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-[#999] hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href={projectInquiryHref}
            className="hidden md:inline-flex text-sm border border-[#1f1f1f] text-[#aaa] hover:text-white hover:border-[#444] px-4 py-2 rounded-lg transition-colors"
          >
            Start a project
          </a>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-[5px] p-2 -mr-2"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.2 }}
              className="block w-5 h-px bg-[#aaa]"
            />
            <motion.span
              animate={menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.15 }}
              className="block w-5 h-px bg-[#aaa]"
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.2 }}
              className="block w-5 h-px bg-[#aaa]"
            />
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-[#0a0a0a]/98 backdrop-blur-lg pt-16 flex flex-col md:hidden"
          >
            <nav aria-label="Main" className="flex flex-col items-center justify-center flex-1 gap-6 pb-16">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.3 }}
                  onClick={() => setMenuOpen(false)}
                  className="text-2xl font-bold text-[#aaa] hover:text-white transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href={projectInquiryHref}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.35 }}
                className="mt-4 text-sm border border-[#333] text-[#aaa] px-6 py-3 rounded-lg hover:text-white hover:border-[#555] transition-colors"
              >
                Start a project
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
