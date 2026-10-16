'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const services = [
  {
    title: 'Web applications',
    description:
      'Customer-facing products, dashboards, and internal tools, built to be fast, accessible, and easy to keep improving.',
    tools: ['React', 'TypeScript', 'GraphQL'],
  },
  {
    title: 'Mobile applications',
    description:
      'iOS and Android apps from one codebase, through App Store and Google Play release, and the updates that follow.',
    tools: ['React Native', 'Expo', 'TypeScript'],
  },
  {
    title: 'Backend systems and APIs',
    description:
      'APIs, data models, authentication, and notification systems that hold up in production.',
    tools: ['Node.js', 'PostgreSQL', 'Firebase'],
  },
  {
    title: 'Cloud infrastructure and deployment',
    description:
      'Hosting, release pipelines, and environments that let a team ship often without surprises.',
    tools: ['AWS', 'Firebase', 'CI/CD'],
  },
]

export default function Services() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="services" ref={ref} className="py-12 md:py-20 px-6 md:px-12 lg:px-24 scroll-mt-16">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-8 md:mb-10"
        >
          <span className="text-xs font-mono text-[#888] tracking-widest uppercase">01 — Services</span>
          <div className="flex-1 h-px bg-[#1f1f1f]" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-2xl mb-10 md:mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
            From architecture{' '}
            <span className="text-[#888]">to launch.</span>
          </h2>
          <p className="text-[#aaa] leading-relaxed">
            WaveCode builds software for businesses end to end: planning the system, writing the
            code, and getting it into users&apos; hands. You work directly with the engineer
            building your product.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + index * 0.08 }}
            >
              <Card className="h-full p-5 md:p-6 flex flex-col">
                <span className="text-xs font-mono text-[#666] mb-4">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                <p className="text-sm text-[#aaa] leading-relaxed mb-5 flex-1">{service.description}</p>
                <div className="flex flex-wrap gap-2">
                  {service.tools.map((tool) => (
                    <Badge key={tool}>{tool}</Badge>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
