import { cn } from '@/lib/utils'

// The WaveCode mark, shared with the WaveCode Studio app: a waveform envelope
// drawn as bars, with one amber bar (48×48 viewBox).
const bars = [
  { x: 4, y: 18, height: 12 },
  { x: 11, y: 12, height: 24 },
  { x: 18, y: 6, height: 36 },
  { x: 25, y: 2, height: 44, lit: true },
  { x: 32, y: 10, height: 28 },
  { x: 39, y: 16, height: 16 },
]

export const LOGO_AMBER = '#FFB627'

export function LogoMark({ size = 24, className }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      {bars.map((bar) => (
        <rect
          key={bar.x}
          x={bar.x}
          y={bar.y}
          width={4}
          height={bar.height}
          rx={2}
          fill={bar.lit ? LOGO_AMBER : 'currentColor'}
        />
      ))}
    </svg>
  )
}

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn('inline-flex items-center gap-2.5 text-white', className)}>
      <LogoMark size={22} />
      <span className="font-semibold tracking-tight">WaveCode</span>
    </span>
  )
}
