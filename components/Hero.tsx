'use client'

import { motion } from 'framer-motion'
import { projectInquiryHref, site } from '@/lib/site'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] },
})

const nodes = [
  { label: 'TypeScript', x: 50, y: 8,  size: 'md' },
  { label: 'React',       x: 18, y: 22, size: 'lg' },
  { label: 'Node.js',     x: 75, y: 20, size: 'md' },
  { label: 'React Native',x: 40, y: 38, size: 'lg' },
  { label: 'GraphQL',     x: 12, y: 52, size: 'sm' },
  { label: 'PostgreSQL',  x: 72, y: 46, size: 'sm' },
  { label: 'AWS',         x: 52, y: 58, size: 'md' },
  { label: 'Firebase',    x: 22, y: 70, size: 'sm' },
  { label: 'Google Cloud',x: 68, y: 70, size: 'sm' },
  { label: 'Claude',      x: 40, y: 84, size: 'sm' },
]

const edges = [
  [0, 1], [0, 2], [1, 3], [2, 3], [3, 4],
  [3, 5], [3, 6], [4, 7], [5, 8], [6, 9],
]

function TechGraph() {
  return (
    <div className="relative w-full h-full">
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        {edges.map(([a, b], i) => (
          <motion.line
            key={i}
            x1={nodes[a].x} y1={nodes[a].y}
            x2={nodes[b].x} y2={nodes[b].y}
            stroke="rgba(255,255,255,0.06)"
            strokeWidth="0.3"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 + i * 0.08 }}
          />
        ))}
      </svg>

      {nodes.map((node, i) => (
        <motion.div
          key={node.label}
          className="absolute"
          style={{ left: `${node.x}%`, top: `${node.y}%`, transform: 'translate(-50%, -50%)' }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 + i * 0.07, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            animate={{ y: [0, i % 2 === 0 ? -6 : 6, 0] }}
            transition={{ duration: 4 + (i % 3), repeat: Infinity, ease: 'easeInOut', delay: i * 0.3 }}
            className={`
              font-mono border border-[#2a2a2a] bg-[#111] rounded-lg whitespace-nowrap
              text-[#888] hover:text-white hover:border-[#444] transition-colors cursor-default
              ${node.size === 'lg' ? 'text-xs px-3 py-1.5' : node.size === 'md' ? 'text-[10px] px-2.5 py-1' : 'text-[9px] px-2 py-0.5'}
            `}
          >
            {node.label}
          </motion.div>
        </motion.div>
      ))}
    </div>
  )
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 overflow-x-hidden pt-16"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />
      <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.04) 0%, transparent 70%)' }} />

      <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center w-full max-w-7xl">
        <div className="min-w-0">
          <motion.p
            {...fadeUp(0.1)}
            className="text-xs font-mono text-[#888] tracking-widest uppercase mb-6"
          >
            Independent software studio · Puerto Rico
          </motion.p>

          <motion.h1
            {...fadeUp(0.2)}
            className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-none mb-6"
          >
            Software built{' '}
            <span className="text-[#aaa]">with intention.</span>
          </motion.h1>

          <motion.p
            {...fadeUp(0.35)}
            className="text-lg md:text-xl text-[#aaa] leading-relaxed mb-10"
          >
            {site.description}
          </motion.p>

          <motion.div {...fadeUp(0.5)} className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a
              href={projectInquiryHref}
              className="inline-flex items-center gap-2 bg-white text-black font-medium px-6 py-3 rounded-lg hover:bg-[#e0e0e0] transition-colors text-sm"
            >
              Start a project
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a
              href="#products"
              className="inline-flex items-center gap-2 border border-[#333] text-white font-medium px-6 py-3 rounded-lg hover:border-[#555] hover:bg-[#111] transition-colors text-sm"
            >
              Explore WaveCode Studio
            </a>
          </motion.div>

          {/* Mobile-only: scrolling tech pills */}
          <motion.div
            {...fadeUp(0.65)}
            className="md:hidden mt-8 -mx-6 overflow-hidden"
          >
            <div className="flex gap-2 px-6 overflow-x-auto pb-1 scrollbar-none" style={{ scrollbarWidth: 'none' }}>
              {nodes.map((node) => (
                <span
                  key={node.label}
                  className="flex-shrink-0 text-xs font-mono border border-[#2a2a2a] bg-[#111] text-[#888] px-3 py-1.5 rounded-lg"
                >
                  {node.label}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div {...fadeUp(0.65)} className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-8 md:mt-12">
            <a
              href={`mailto:${site.email}`}
              className="text-sm text-[#999] hover:text-white transition-colors"
            >
              {site.email}
            </a>
            <span className="w-px h-4 bg-[#2a2a2a]" />
            <span className="text-sm text-[#999]">{site.location.label}</span>
          </motion.div>
        </div>

        {/* Desktop: tech graph */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="hidden md:block relative h-[480px]"
        >
          <TechGraph />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
      >
        <span className="text-xs text-[#777] tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M8 3v10M4 9l4 4 4-4" stroke="#777" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </motion.div>
      </motion.div>
    </section>
  )
}
