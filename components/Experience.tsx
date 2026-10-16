'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const jobs = [
  {
    company: 'Mallard Bay',
    about: 'Platform for booking guided hunting and fishing experiences.',
    url: 'https://mallardbay.com',
    role: 'Senior Software Engineer',
    period: 'Oct 2025 – Present',
    current: false,
    bullets: [
      'Full-stack product development across web and mobile systems.',
      'Shipped production features using React, React Native, Node.js, and cloud-based services.',
      'Collaborated with product and engineering stakeholders to improve application reliability.',
      'Supported debugging, maintenance, and ongoing improvements across existing codebases.',
    ],
    tags: ['React', 'React Native', 'Node.js', 'GraphQL', 'Firebase', 'Google Cloud', 'Cursor', 'Claude'],
  },
  {
    company: 'BoomNation',
    about: 'Workforce platform for the construction and skilled trades industry.',
    url: undefined,
    role: 'Senior Software Engineer',
    period: 'Jan 2024 – Oct 2025',
    current: false,
    bullets: [
      'Led development of an employee management platform that contributed to securing a $1.5M business contract.',
      'Mentored engineers and guided technical execution from planning through deployment.',
      'Designed a notification system using AWS Lambda, SQS, Twilio, SendGrid, Firebase, and push notifications.',
      'Migrated authentication infrastructure to AWS Cognito, reducing complexity and costs.',
      'Built React Native product features including a newsfeed system to improve engagement and retention.',
      'Implemented analytics tracking via Segment and Braze SDKs for user behavior visibility.',
      'Managed mobile release workflows for the App Store and Google Play.',
    ],
    tags: ['React Native', 'Node.js', 'AWS Lambda', 'SQS', 'Cognito', 'Twilio', 'Segment'],
  },
  {
    company: 'BoomNation',
    about: 'Workforce platform for the construction and skilled trades industry.',
    url: undefined,
    role: 'Full Stack Software Engineer',
    period: 'Jan 2021 – Jan 2024',
    current: false,
    bullets: [
      'Built and maintained production features across React, React Native, Node.js, GraphQL, PostgreSQL, and AWS.',
      'Developed backend APIs and frontend interfaces for job seekers, employers, and internal teams.',
      'Contributed to scalable application architecture, database modeling, and third-party integrations.',
      'Maintained critical systems including authentication, notifications, analytics, and mobile user flows.',
      'Diagnosed and resolved production issues, improved system reliability.',
    ],
    tags: ['React', 'GraphQL', 'PostgreSQL', 'Node.js', 'AWS'],
  },
]

function JobCard({ job, index, inView }: { job: typeof jobs[0]; index: number; inView: boolean }) {
  const [open, setOpen] = useState(index === 0)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="overflow-hidden">
        <button
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          className="w-full text-left p-5 md:p-6 flex items-start justify-between gap-4"
        >
          <div className="min-w-0">
            <div className="flex items-center gap-3 mb-1 flex-wrap">
              <span className="text-base md:text-lg font-semibold">{job.company}</span>
              {job.current && (
                <span className="text-xs font-mono bg-white text-black px-2 py-0.5 rounded-full">
                  Current
                </span>
              )}
            </div>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-[#999]">
              <span>{job.role}</span>
              <span className="hidden sm:inline">·</span>
              <span className="font-mono text-xs">{job.period}</span>
            </div>
          </div>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            className={`text-[#777] flex-shrink-0 mt-1 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
          >
            <path d="M5 7.5l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        {open && (
          <div className="px-5 pb-5 md:px-6 md:pb-6 border-t border-[#1f1f1f] pt-5">
            <p className="text-sm text-[#888] mb-4">
              {job.about}{' '}
              {job.url && (
                <a
                  href={job.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#aaa] hover:text-white underline underline-offset-4 decoration-[#444]"
                >
                  {new URL(job.url).hostname}
                </a>
              )}
            </p>
            <ul className="space-y-3 mb-5">
              {job.bullets.map((bullet, i) => (
                <li key={i} className="flex gap-3 text-sm text-[#bbb] leading-relaxed">
                  <span className="text-[#666] mt-1.5 flex-shrink-0">—</span>
                  {bullet}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2">
              {job.tags.map((tag) => (
                <Badge key={tag}>{tag}</Badge>
              ))}
            </div>
          </div>
        )}
      </Card>
    </motion.div>
  )
}

export default function Experience() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="track-record" ref={ref} className="py-12 md:py-20 px-6 md:px-12 lg:px-24 border-t border-[#1f1f1f] scroll-mt-16">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-6"
        >
          <span className="text-xs font-mono text-[#888] tracking-widest uppercase">04 — Track record</span>
          <div className="flex-1 h-px bg-[#1f1f1f]" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-8 md:mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-3">The founder&apos;s experience</h2>
          <p className="text-[#aaa] leading-relaxed">
            Engineering roles Izzy has held at other companies. These were positions he held
            professionally, not WaveCode client projects.
          </p>
        </motion.div>

        <div className="space-y-3 md:space-y-4">
          {jobs.map((job, i) => (
            <JobCard key={`${job.company}-${job.role}`} job={job} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  )
}
