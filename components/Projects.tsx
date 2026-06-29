'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Badge } from '@/components/ui/badge'

const projects = [
  {
    name: 'BoomNation',
    description:
      'A workforce platform connecting job seekers and employers in the construction and skilled trades industry. I worked here for 4 years — built the mobile app, notification infrastructure, authentication systems, and analytics integrations.',
    role: 'Senior Software Engineer (4 yrs)',
    highlights: ['$1.5M contract secured', 'Full AWS notification pipeline', 'iOS + Android releases', 'Cognito auth migration'],
    tags: ['React Native', 'Node.js', 'GraphQL', 'PostgreSQL', 'AWS', 'Segment', 'Braze'],
    url: 'https://www.instagram.com/boomnationusa/?hl=en',
    gradient: 'from-orange-500/10 to-transparent',
  },
  {
    name: 'Mallard Bay',
    description:
      'An outdoor recreation platform for guided hunting and fishing experiences. Full-stack product development across web and mobile — shipping features, improving reliability, and collaborating with product teams.',
    role: 'Senior Software Engineer',
    highlights: ['Web + mobile development', 'React Native features', 'Cloud-based services', 'Production reliability'],
    tags: ['React', 'React Native', 'Node.js', 'GraphQL', 'Firebase', 'Google Cloud', 'Cursor', 'Claude'],
    url: 'https://mallardbay.com',
    gradient: 'from-blue-500/10 to-transparent',
  },
]

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="projects" ref={ref} className="py-12 md:py-20 px-6 md:px-12 lg:px-24 border-t border-[#1f1f1f]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-8 md:mb-10"
        >
          <span className="text-xs font-mono text-[#888] tracking-widest uppercase">04 — Projects</span>
          <div className="flex-1 h-px bg-[#1f1f1f]" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
          {projects.map((project, i) => (
            <motion.a
              key={project.name}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="relative border border-[#1f1f1f] rounded-xl p-5 md:p-8 hover:border-[#333] transition-all group overflow-hidden block cursor-pointer"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-3 md:mb-4">
                  <h3 className="text-lg md:text-xl font-bold">{project.name}</h3>
                  <span className="text-[#777] group-hover:text-white transition-colors flex-shrink-0 ml-2">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <path d="M5 13L13 5M8 5h5v5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </div>

                <p className="text-xs font-mono text-[#888] mb-3 md:mb-4">{project.role}</p>
                <p className="text-sm text-[#aaa] leading-relaxed mb-4 md:mb-6">{project.description}</p>

                <div className="grid grid-cols-2 gap-2 mb-4 md:mb-6">
                  {project.highlights.map((h) => (
                    <div key={h} className="flex items-center gap-2 text-xs text-[#999]">
                      <span className="w-1 h-1 rounded-full bg-[#777] flex-shrink-0" />
                      {h}
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} className="group-hover:border-[#2a2a2a]">{tag}</Badge>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
