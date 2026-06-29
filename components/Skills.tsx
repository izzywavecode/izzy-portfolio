'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const skillGroups = [
  {
    label: 'Languages & Frameworks',
    skills: ['TypeScript', 'JavaScript', 'React', 'React Native', 'Redux', 'Node.js', 'Express.js', 'GraphQL', 'Apollo'],
  },
  {
    label: 'Backend & Databases',
    skills: ['PostgreSQL', 'SQL', 'Firebase', 'Sequelize', 'Knex', 'REST APIs', 'Event-driven systems'],
  },
  {
    label: 'Cloud & DevOps',
    skills: ['AWS Lambda', 'SQS', 'RDS', 'S3', 'Cognito', 'Route 53', 'EC2', 'Terraform', 'CI/CD', 'Git'],
  },
  {
    label: 'Mobile',
    skills: ['React Native', 'iOS Release Management', 'Android Release Management', 'Push Notifications', 'App Store', 'Google Play'],
  },
  {
    label: 'Testing & Tooling',
    skills: ['Jest', 'TDD', 'Code Reviews', 'Segment', 'Braze', 'Twilio', 'SendGrid'],
  },
  {
    label: 'AI Workflow',
    skills: ['Claude', 'ChatGPT', 'Cursor', 'Codex', 'AI-assisted development', 'Rapid prototyping'],
  },
]

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="skills" ref={ref} className="py-20 px-6 md:px-12 lg:px-24 border-t border-[#1f1f1f]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-10"
        >
          <span className="text-xs font-mono text-[#888] tracking-widest uppercase">03 — Skills</span>
          <div className="flex-1 h-px bg-[#1f1f1f]" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="border border-[#1f1f1f] rounded-xl p-6 hover:border-[#333] transition-colors"
            >
              <h3 className="text-xs font-mono text-[#888] tracking-wider uppercase mb-4">{group.label}</h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-sm text-[#ccc] bg-[#111] border border-[#1f1f1f] px-2.5 py-1 rounded-md"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 p-6 rounded-xl border border-[#1f1f1f] bg-[#0d0d0d] max-w-sm"
        >
          <p className="text-sm text-[#888] font-mono mb-2">Languages</p>
          <p className="text-[#aaa]">
            English (Native) · Spanish (Native) · Portuguese (Intermediate)
          </p>
        </motion.div>
      </div>
    </section>
  )
}
