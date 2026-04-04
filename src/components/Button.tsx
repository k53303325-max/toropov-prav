import { Link } from 'react-router-dom'
import type { ReactNode } from 'react'

type Props = {
  children: ReactNode
  to?: string
  href?: string
  variant?: 'primary' | 'ghost'
  className?: string
}

const base =
  'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-[15px] font-semibold tracking-tight transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]'

const styles = {
  primary:
    'bg-[var(--color-ink)] text-white shadow-[var(--shadow-card)] hover:-translate-y-0.5 hover:shadow-[var(--shadow-card-hover)]',
  ghost:
    'border border-[var(--color-border)] bg-[var(--color-surface-elevated)] text-[var(--color-ink)] hover:border-[var(--color-accent)] hover:bg-[var(--color-accent-soft)]',
}

export function Button({ children, to, href, variant = 'primary', className = '' }: Props) {
  const c = `${base} ${styles[variant]} ${className}`.trim()

  if (to) {
    return (
      <Link to={to} className={c}>
        {children}
      </Link>
    )
  }
  if (href) {
    return (
      <a href={href} className={c}>
        {children}
      </a>
    )
  }
  return <span className={c}>{children}</span>
}
