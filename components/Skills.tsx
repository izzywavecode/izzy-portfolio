'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Card, CardHeader, CardContent, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

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
    <section id="skills" ref={ref} className="py-12 md:py-20 px-6 md:px-12 lg:px-24 border-t border-[#1f1f1f]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-8 md:mb-10"
        >
          <span className="text-xs font-mono text-[#888] tracking-widest uppercase">03 — Skills</span>
          <div className="flex-1 h-px bg-[#1f1f1f]" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <Card className="h-full">
                <CardHeader className="pb-3">
                  <CardTitle className="text-xs font-mono text-[#888] tracking-wider uppercase">
                    {group.label}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <Badge key={skill} variant="solid">{skill}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-8 md:mt-12"
        >
          <Card className="p-5 md:p-6 bg-[#0d0d0d] max-w-sm">
            <p className="text-sm text-[#888] font-mono mb-2">Languages</p>
            <p className="text-[#aaa]">
              English (Native) · Spanish (Native) · Portuguese (Intermediate)
            </p>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
