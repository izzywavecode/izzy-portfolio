import Link from 'next/link'
import { site } from '@/lib/site'

export default function Footer() {
  return (
    <footer className="px-6 md:px-12 lg:px-24 pb-10">
      <div className="max-w-5xl mx-auto pt-8 border-t border-[#1f1f1f] flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#777] font-mono">
        <span>
          © {new Date().getFullYear()} {site.legalName}
        </span>
        <span>{site.location.label}</span>
        <Link href="/privacy" className="hover:text-white transition-colors">
          Privacy
        </Link>
      </div>
    </footer>
  )
}
