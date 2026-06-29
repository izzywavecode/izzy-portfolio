import { cn } from '@/lib/utils'

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'outline' | 'solid'
}

export function Badge({ children, className, variant = 'outline', ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center text-xs font-mono px-2.5 py-1 rounded-md transition-colors whitespace-nowrap',
        variant === 'outline' && 'border border-[#1f1f1f] text-[#888]',
        variant === 'solid' && 'border border-[#1f1f1f] text-[#ccc] bg-[#111]',
        className
      )}
      {...props}
    >
      {children}
    </span>
  )
}
