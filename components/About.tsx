'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] },
})

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" ref={ref} className="py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-10"
        >
          <span className="text-xs font-mono text-[#888] tracking-widest uppercase">01 — About</span>
          <div className="flex-1 h-px bg-[#1f1f1f]" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="aspect-square max-w-sm rounded-2xl overflow-hidden relative">
              <Image
                src="/headshot.png"
                alt="Izzy Romero"
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
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              I build things that{' '}
              <span className="text-[#888]">actually ship.</span>
            </h2>
            <p className="text-[#aaa] leading-relaxed">
              Hey, I&apos;m Izzy — a Senior Full Stack Engineer with 4+ years of experience
              taking products from idea to production. I&apos;ve spent most of that time at
              BoomNation and Mallard Bay, owning features end-to-end across web and mobile.
            </p>
            <p className="text-[#aaa] leading-relaxed">
              I&apos;m fluent in TypeScript, React, React Native, Node.js, and AWS — and I
              genuinely enjoy the whole stack, from designing a database schema to tweaking
              animations on a mobile screen. I&apos;ve led engineering teams, mentored developers,
              and shipped work that helped close a $1.5M contract.
            </p>
            <p className="text-[#aaa] leading-relaxed">
              {`Originally from a bilingual household — Spanish and English are both native to me,
              and I'm picking up Portuguese too. I care about clear communication and teams
              that move fast without breaking everything.`}
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              {['TypeScript', 'React', 'React Native', 'Node.js', 'AWS', 'PostgreSQL'].map((tag) => (
                <span key={tag} className="text-xs font-mono border border-[#1f1f1f] text-[#999] px-3 py-1.5 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
